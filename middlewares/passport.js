import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from '../models/User.js'

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.SECRET_KEY
}

const fn = async ( payload, next ) => {
    try {
       const user = await User.findOne( { _id: payload._id } )
       if( !user ){
          throw new Error( "User / Password incorrect" )
       }
       next( null, user )
    } catch (error) {
        console.log(error)
        next( error, null )
    }
}

export default passport.use( new Strategy( opt, fn ) )