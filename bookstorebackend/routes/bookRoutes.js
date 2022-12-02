
import express from 'express';
import { bookRegister ,bookDetails,searchbookDetails} from '../controller/bookController.js';

const router = express.Router();




router.post('/register',  bookRegister);



router.get('/getAll',  bookDetails);
router.get('/search',  searchbookDetails);




export default router;