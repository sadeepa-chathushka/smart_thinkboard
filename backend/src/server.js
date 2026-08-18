import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
}));

// middleware to parse JSON request bodies
app.use(express.json());
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


//our simple custom middleware to log the request method and url
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}); 
