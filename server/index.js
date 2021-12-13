import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import ExperienceDAO from "./dao/experienceDAO.js"
import EducationDAO from "./dao/educationDAO.js"
import SkillsDAO from "./dao/skillsDAO.js"

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 3002

MongoClient.connect(
    process.env.MONGODB_CONNECT_URL, 
    {
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
    ).catch(err => {
        console.error(err.stack)
        process.exit(1)
    }
).then(async client => {
    await ExperienceDAO.injectDB(client);
    await EducationDAO.injectDB(client);
    await SkillsDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`listening to port ${port}`)
    })
})









// import express from "express";
// import cors from "cors"
// import { MongoClient } from 'mongodb';
// import assert from "assert";
// import dotenv from 'dotenv';
// import * as experience from "./routes/experience.js"

// // const express = require('express');

// const PORT = process.env.PORT || 3001;
// const app = express();
// let db = {};
// dotenv.config();

// app.use(cors());
// app.use(express.json());

// app.use('/api/experience', experience);
// app.use("*", (req, res) => res.status(404).json({error: "Page Not Found"}));

// app.get('/api', (req, res) => {
//     res.json({message: "Hello from the server!"});
// })

// let server = app.listen(PORT, () => {
//     console.log('Listening to port: ' + PORT);
// })

// MongoClient.connect(process.env.MONGODB_CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     console.log("URL: " + process.env.MONGODB_CONNECT_URL);
//     assert.equal(null, err);
//     db.client = client;
//     db.collection = client.db('portfolidb').collection('portfolio');
// });

// app.use((req, res, next) => {
//     req.db = db;
//     next();
//   });



// server.db = db;

// export default app;
// // app.get('/api/experience', (req, res, next) => {
// //     req.db.collection.find({type: "EXPERIENCE_TYPE"}).toArray((err, docs) => {
// //         if(err){
// //             err.status = 400;
// //             return next(err);
// //         }

// //         res.json(docs);
// //     })
//     // res.json({
//     //     company: "Revalize (Formerly Configure One)",
//     //     title: "Software Development Engineer"
//     // });
// // })