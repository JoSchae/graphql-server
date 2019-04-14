// import express from "express";
// import expressGraphQL from "express-graphql";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";

// import schema from "./graphql/";

require("dotenv").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "./graphql/";
import { models } from "./models/";

const { mongoURI: db } = process.env;

const pubsub = new PubSub();

const options = {
    port: process.env.PORT || "4000",
    endpoint: '/graphql',
    subscriptions: "/subscriptions",
    playground: "/playground"
};

const context = {
    models,
    pubsub
};

// const app = express();
// const PORT = process.env-PORT || "4000";
// const db = "mongodb+srv://johannes:ZAagAnSRUWwX0aqBoz8d@my-sandbox-graph-db-j7bwq.mongodb.net/test?retryWrites=true";

// Conntect to MongoDb with Mongoose.
mongoose
    .connect(
        db,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const server = new GraphQLServer({
    schema,
    context
});

server.start(options, ({ port }) => {
    console.log(`Server running on http://localhost:${port}`);
});

// app.use(
//     "/graphql",
//     cors(),
//     bodyParser.json(),
//     expressGraphQL({
//         schema,
//         graphiql: true
//     })
// );

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));