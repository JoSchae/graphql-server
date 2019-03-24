import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env-PORT || "4000";
const db = "mongodb+srv://johannes:ZAagAnSRUWwX0aqBoz8d@my-sandbox-graph-db-j7bwq.mongodb.net/test?retryWrites=true";

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

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema: {},
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));