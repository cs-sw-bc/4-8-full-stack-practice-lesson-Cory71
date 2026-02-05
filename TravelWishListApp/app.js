import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import destinationRoutes from './routes/destinationRoutes.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/destinations', destinationRoutes);

app.get('/', (req, res) => {
  res.redirect('/destinations');
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('TravelWishListApp running at http://localhost:' + port);
    });
  } catch (err) {
    console.log('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

startServer();
