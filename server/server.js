import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongoDB.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"

const port = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.use(cors({
    origin: function(origin, callback) {
        const allowedOrigins = ['https://pic-prompt.vercel.app', 'http://localhost:5173'];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
        'token',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials'
    ],
    exposedHeaders: ['Content-Range', 'X-Content-Range']
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.header('Permissions-Policy', 'interest-cohort=()');
    next();
});

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/',(req,res) => res.send('API Working'))

app.listen(port, () => console.log(`Server started on PORT: ${port}`))


