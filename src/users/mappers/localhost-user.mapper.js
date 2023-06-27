import { User } from "../models/user";

/**
 * Mapper que se utilizará en el caso de el nombado a alguna variable del backend cambie
 */

/**
 * 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localHostUser ) => {


    const {
    
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
        
    } = localHostUser;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender,
    })
}