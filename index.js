import express from "express";
import mongoose from "mongoose";
import carModelSchema from "./models/carmodels.js";
import dummyCarData from "./models/saveData.js";
import cors from "cors";
const app = express();

import getCarsData from './routes/routes.js';
app.use(cors());

const port = process.env.PORT || 5000;

  app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });
 
  app.use('/api/cars',getCarsData);

  const MONGODB_URL = "mongodb://gaganbansal021:M04IK5DmmUCu6D62@ac-vgl0mge-shard-00-00.zdole43.mongodb.net:27017,ac-vgl0mge-shard-00-01.zdole43.mongodb.net:27017,ac-vgl0mge-shard-00-02.zdole43.mongodb.net:27017/?ssl=true&replicaSet=atlas-j1flgd-shard-0&authSource=admin&retryWrites=true&w=majority"

  mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => {
    console.error(`${error} Unable to connect to MongoDB`);
  });



