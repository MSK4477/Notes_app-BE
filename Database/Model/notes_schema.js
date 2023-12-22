import {model, Schema} from "mongoose"


const notesSchema =  new Schema  ({ 

    author: { 
        type:Schema.Types.ObjectId,
        required:true,
        trim:true
    },
    
    notes : { 
        type:String,
        required:true,
        trim:true
    },

    date:{ 
        type:Date,
        required:true,
        default:Date.now()

    },

    completed:  {
        type:Boolean,
        default:false
    }
})

const Notes = model("notes", notesSchema)

export default Notes