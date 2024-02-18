// projectRoutes.js
import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  rateProject,
  reviewProject
} from '../controllers/projectController.js';

const router = express.Router();

router.post('/', createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.post('/:id/rate', rateProject);
router.post('/:id/review', reviewProject);

export default router;
