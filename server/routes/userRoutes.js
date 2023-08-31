// userRoutes.js
import express from 'express';

import {

  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();


router.put('/profile', updateUserProfile);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

export default router;
