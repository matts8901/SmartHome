const mongoose = require("mongoose");
const mongoUrl="mongodb+srv://rawanbazzi:rawan2002@cluster0.ujadddx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl).then(()=>{
    console.log("Connected to mongo db");
}).catch((err)=>{
    console.log("Error",err);
});

const UserDetailsSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required : true 
    },
    password: {
        type: String,
        required: true
    }
    
}, {
    collection: "UserDetails"
});
const users = mongoose.model("UserDetails", UserDetailsSchema);
module.exports = users
