const express = require ('express')
const app = express();
const mongoose = require('mongoose');
const  route  = require('./routes/route');
require ('dotenv').config();
const logRequest = require('./logger');
// const myMiddleware = require('./myMiddleware')
const cors = require ('cors')
const path = require('path');

app.use(express.json());
app.use(logRequest)
app.use(cors())
// app.use(myMiddleware);
app.use('/api', route)

app.use(express.static(path.join(__dirname, "/portfolio2/dist")));

// Render client for any path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/portfolio2/dist/index.html"));
});


mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("listening on port 4000");
    })

    console.log("mongo db is also connected");
})

