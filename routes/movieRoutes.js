import express from 'express';
import {
  getAllMovies,
  showNewMovieForm,
  createMovie,
  getMovieDetails
} from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getAllMovies);
router.get('/new', showNewMovieForm);
router.post('/', createMovie);
router.get('/:id', getMovieDetails);

export default router;
