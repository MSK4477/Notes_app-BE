import { Schema, model } from "mongoose"



const userSchema = new Schema ( {
    name:  {
        required:true,
        type:String,
        trim: true

    },
    email : { 
        required:true,
        type:String,
        unique: true,
        trim: true

    },
   
      password: {
        type: String,
        required: true,
        trim: true,
      },
      verified : {
        type: Boolean,
        default:false
      },
      temproaryToken : { 
        type: String,
        default:""
      }



})

const User = model ("notes-user", userSchema)

export default User