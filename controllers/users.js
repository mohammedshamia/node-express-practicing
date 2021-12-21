import {usersData} from "../static/usersData.js";

export const getAllUsers=async (req, res)=>{
    res.status(200).json({
        users:usersData
    })
}

export const getUserById=async (req, res)=>{
    const user=usersData.find(item=>item.id===req.params.id)
    if (user) {
        res.status(200).json({
            user
        })
    } else res.status(404).json({
            message:'User not found'
        })
}