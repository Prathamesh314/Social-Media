import User from "../models/User.js";
import Posts from "../models/post.js";

export const createPost = async(req, res)=>{
    try {
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Posts({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        });

        await newPost.save();
        const posts = newPost.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export const getFeedPost = async(req, res)=>{
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (error) {
        
    }
}

export const getUserPosts = async(req, res)=>{
    try {
        const {userId} = await req.params;
        const posts = await Posts.find({
            userId
        });
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}