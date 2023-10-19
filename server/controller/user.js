import User from "../models/User";

export const getUser = async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getUserFriends = async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(
            user.friends.map((id)=>User.findById(id))
        );
        const formattedFriends =  friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath})=>{
                return {_id, firstName, lastName, occupation, location, picturePath};
            }
        );
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}