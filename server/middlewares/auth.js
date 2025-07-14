import jwt from 'jsonwebtoken'

const authUser = async (req,res,next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({success: false, message: 'Not Authorized Login Again'})
    }

    try {
        const token_deocde = jwt.verify(token, process.env.JWT_SECRET)

        if (token_deocde.id) {
            req.body.userId = token_deocde.id;
        }else{
            return res.json({success: false, message: 'Not Authorized Login Again'})
        }

        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
        
    }
}

export default authUser