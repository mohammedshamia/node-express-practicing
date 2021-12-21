import express from 'express'
import {usersRoutes} from "./routes/index.js";
import {notFoundPage} from "./middleware/index.js";
import morgan from "morgan";

const app = express()


if (process.env.NODE_ENV!=='production'){
    app.use(morgan('dev'))
}

app.get('/', (req, res)=>{
    res.json({
        params: req.params,
        query:req.query,
        headers:req.headers
    })
})

app.use('/api/users',usersRoutes)

app.use(notFoundPage)

const PORT=5000

app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})