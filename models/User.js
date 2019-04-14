import mongoose from "mongoose";
import { ObjectID } from 'mongodb'; 

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

// Create the User schema.

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

export default User;