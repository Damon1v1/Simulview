const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// establishing schema to hold userdata in our database
const userSchema = new Schema ({
    first_name: {
        type: String,
        //validation to make sure name doesn't contain numbers or isn't left blank
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],
    },
    last_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
    username: { 
        type: String,
        unique: true,
        required: [true, "Can't be left blank"],
        // validation to make sure username isn't already taken
        match: [/^[a-zA-Z0-9]+$/, "is taken"],
        index: true 
    },
    password: { 
        type: String,
        required: true
    }
});

// exporting schema to be called in other files
module.exports = mongoose.model("Userdata", userSchema);