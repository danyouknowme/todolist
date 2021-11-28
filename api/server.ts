import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { listRouter } from './routes/lists'

require('dotenv').config({ path: __dirname + '/.env' });
const app = express();

mongoose.connect(
        `${process.env.MONGO_URL}`
    )
    .then(() => console.log("Database connection using MongoDB is successfully."))
    .catch((err) => console.log("Error", err));

app.use(cors());
app.use(express.json());
app.use(listRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is starting on port ${process.env.PORT}...`);
})