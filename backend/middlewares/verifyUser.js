import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();


const verifyUser = async (req, res, next) => {

    try {
        const cookieToken = req.cookies.TOKEN;
        if (!cookieToken) return res.status(401).json({ message: 'Unauthorized' });

        jwt.verify(cookieToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Token expired or invalid' });
            res.status(200).json({
                userID: decoded.id,
                message: `${decoded.id} Authorization Successful`,
                success: true
            });
            req.userID = decoded.id;
            next();
            console.log(`${req.userID} is now authorized`);
           

        });

        

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}


export default verifyUser;