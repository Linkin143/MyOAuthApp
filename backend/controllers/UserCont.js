import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

dotenv.config();


const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);


        const createdUser = await User.create({
            name: name,
            email: email,
            password: hash
        })

        res.status(200).json({
            message: createdUser,
            success: true
        })


    } catch (error) {
        console.error("Signup Error:", error);

        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

const signInUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const signedUser = await User.findOne({ email });

        if (signedUser) {
            if (bcrypt.compareSync(password, signedUser.password)) {
                const token = jwt.sign({ id: signedUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
                res.cookie("TOKEN", token, {
                    httpOnly: true, 
                    maxAge: 3600000, 
                    secure: true,             // must be true on HTTPS (e.g., Netlify)
                    sameSite: 'None',         // required for cross-site cookies
                });

                res.status(200).json({
                    message: "Login Successful",
                    Data: signedUser,
                    success: true
                })


            } else {
                res.status(400).json({
                    message: "Invalid Credentials"
                })
            }


        } else {
            res.status(400).json({
                message: "Invalid Credentials"
            })
        }




    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}



const logoutUser = async (req, res) => {
    try {
        await res.clearCookie('TOKEN');
        res.status(200).json({
            message: "Logged Out"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

const verifyMe = async () => {
    const token = req.cookies.TOKEN;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token expired or invalid' });
        res.json({ userId: decoded.id });
    });
}







export { createUser, logoutUser, signInUser, verifyMe };

