export const checkUser = (req, res, next)=>{
    if (req.headers.authorization==="token") {
        next()
        return
    }
    res.status(401).json({
        message:"You are not allowed to access this api"
    })
}