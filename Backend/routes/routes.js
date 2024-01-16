const {Router} = require("express");

const {movieModel} = require("../models/blog.model")
const { UserModel } = require("../models/user.model")

const movieRouter = Router()
// GET METHOD
movieRouter.get("/", async (req, res) => {
    const movies = await movieModel.find({user_id:req.user_id})
    res.send({movies : movies,length:movies.length})
})
// POST METHOD
movieRouter.post("/create",async(req,res)=>{
    try {
        const {Title,Poster,Year}=req.body;
        const id=req.user_id
        const user=await UserModel.findOne({_id:id})
        await movieModel.create({
            Title,
            Poster,
            Year
        })
        res.send({msg:"Movie created"})
    } catch (error) {
        console.log(error)
    }
})

// Put Method
movieRouter.put("/edit/:blogId",async(req,res)=>{
    const blogId=req.params.blogId;
    const payload=req.body;
    const id=req.user_id;
    
    const blog = await movieModel.findOne({_id : blogId})
    if(id != blog.user_id){ res.send({mes:"You are Unauthorized"})
   }else{
        await movieModel.findByIdAndUpdate(blogId,payload)
        return  res.status(201).json({"message":"Updated successfully!"});
    }
})

// delete method
movieRouter.delete("/delete/:blogId",async(req,res)=>{
    const blogId=req.params.blogId;
    const id=req.user_id;

    const blog = await movieModel.findOne({_id : blogId})

    if(id != blog.user_id){ res.send({mes:"You are Unauthorized to delete blog"})
   }else{
        await movieModel.findByIdAndDelete(blogId)
        return  res.status(201).json({"message":"Deleted successfully!"});
    }
})

module.exports = {movieRouter}