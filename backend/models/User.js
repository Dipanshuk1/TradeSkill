import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default: ""
    },
    skills:[{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    profileImage:{
        type: String,
        default: ""
    },
    role:{
        type:String,
        enum:["student","teacher"],
        default:"student"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model("User",userSchema);

export default User;