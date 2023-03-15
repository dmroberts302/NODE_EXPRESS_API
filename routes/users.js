import express from "express";
import { retrieveUsers, createUser, retrieveUser, deleteUser, updateUser } from "../controllers/users.js"
const router = express.Router();

let users = [
]

// executed when visiting homepage
router.get('/', retrieveUsers)

// executed when post method invoked on homepage
router.post('/', createUser)

// executed on homepage/:id when visiting
router.get('/:id', retrieveUser)

// executed when delete method is invoked on homepage/:id 
router.delete('/:id', deleteUser)

// executed when patch method is invoked on homepage/:id
router.patch('/:id', updateUser)

export default router;