import userService from "../service/user-service.js"

const register = async (req, res, next)=>{
    try{
        const result = await userService.register(req.body);
        res.status(200).json({
            data:result
        })
    }catch(e){
        next(e)
    }
}

const login = async (req,res,next)=>{
    try {
        const result = await userService.login(req.body)
        res.status(200).json({
            data:result
        })
    } catch (e) {
        next(e)
    }
}
const get = async(req,res,next)=>{
    try {
        const result = await userService.getUser(req.user.username)
        res.status(200).json({
            data: result
        });
    } catch (e) {
        
    }
}

const logout = async(req,res,next)=>{
    try {
        const result = await userService.logout(req.user.username)
        res.status(200).json({
            data: result
        });
    } catch (e) {
        
    }
}

export default{
    register,
    login,
    get,
    logout
}