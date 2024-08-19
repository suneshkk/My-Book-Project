import express from 'express';

import { PORT, mongoDBURL } from './config.js';

import mongoose from 'mongoose';

import cors from 'cors';

import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBURL)
    //This is a Promise method
    .then(() => {
        console.log("App connected to database");
        //This line starts the Express application server and tells it to listen for incoming HTTP requests on a specific port.
        app.listen(PORT, () => {
            console.log(`app is listening to port:${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });
