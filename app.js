require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

// ? Connect database
connectDB();

app.use(cors())

// ! GraphQL route
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running at ${port}; http://127.0.0.1:5000/graphql`.red.bgYellow.underline.italic));