import jwt from "jsonwebtoken";
import Auth from "../configs/auth.config.js";


const verifyToken =  (request, response, next) => {
    const token = request.header('auth-token');
    
    if (!token) return response.status(401).send({message: 'Access Denied'});

    try {
        jwt.verify(token, Auth.secret, (err, decoded) => {
            if(err){
                console.log(err);
                response.status(401).send({message: 'Access Denied'});
            } else {
                request.id = decoded.id;
                request.isLoggedIn = true;
                next();
            }
        });
    } catch (err) {
        return response.status(400).send({message: 'Invalid Token'});
    }
};

export default verifyToken;