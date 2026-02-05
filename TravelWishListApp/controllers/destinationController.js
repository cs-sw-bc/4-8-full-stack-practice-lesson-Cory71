import Destination from '../models/Destination.js';

// Show all destinations
export async function listDestinations(req, res) {
  const destinations = await Destination.find();
  res.render('destinations/index', { destinations });
}

// Show form to add a new destination
export function showNewForm(req, res) {
  res.render('destinations/new');
}

// Add a new destination
export async function createDestination(req, res) {
  await Destination.create(req.body);
  res.redirect('/destinations');
}

// Show details for one destination
export async function showDestination(req, res) {
  const destination = await Destination.findById(req.params.id);
  res.render('destinations/show', { destination });
}
