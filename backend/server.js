import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectDB from "./config/db.js";
import './config/passportConfig.js'; // This must come before you use passport
import userRoutes from "./routes/authRoutes.js";
import dashboardRoute from "./routes/dashboardRoute.js";




dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "https://oauthweb.netlify.app", credentials: true }));
app.use(passport.initialize());



app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 3600000 }
}));

const port = process.env.PORT || 5000;

app.use("/api/auth", userRoutes);
app.use("/api/dashboard", dashboardRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async (req, res) => {
    try {
        console.log("Going to connect DB");
        await connectDB();
        console.log(`Example app listening on port ${port}`)
    } catch (error) {
        console.error(error.message);

    }

})
