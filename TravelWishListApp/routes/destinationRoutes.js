import express from 'express';
import {
  listDestinations,
  showNewForm,
  createDestination,
  showDestination
} from '../controllers/destinationController.js';

const router = express.Router();

router.get('/', listDestinations);
router.get('/new', showNewForm);
router.post('/', createDestination);
router.get('/:id', showDestination);

export default router;
