import express from 'express';
import verifyUser from '../middlewares/verifyUser.js';

const router = express.Router();

router.get('/', verifyUser, (req, res) => {
  
 console.log("Verified");

 
});

export default router;