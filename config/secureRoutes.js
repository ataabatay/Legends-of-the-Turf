import jwt from 'jsonwebtoken'
import  User from '../models/user.js'

export default async function secureRoute(req, res, next){
  try {
    // 1. We want to ensure the Authorization header was passed with the request
    if (!req.headers.authorization) throw new Error('Missing headers')
    // 2. Extract the token from the header, removing the `Bearer ` part
    const token = req.headers.authorization.replace('Bearer ', '')
    // 3. When we have our token, we'll use a jwt method to verify the tokens validity,
    // if the token is valid, it means the secret matched our server secret, and the expiry is in date
    const payload = jwt.verify(token, process.env.SECRET)
    // 5. Make sure that the user identified by the sub in the valid token payload still exists in our database
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not found')
    // 6. If we find the user still exists, then pass the request on to the final controller with next()
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
