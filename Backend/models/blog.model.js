const mongoose=require("mongoose");

const blogSchema= new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    user_id:{type:String},
    user_name:{type:String}
})

const movieModel= mongoose.model("Movie",blogSchema)

module.exports={movieModel}