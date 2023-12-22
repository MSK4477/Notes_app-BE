import bcrypt from "bcryptjs"

const passwordHasher  = async(password) => { 

    const salt = await bcrypt.genSalt();
console.log(password, "from hasher")
   return await bcrypt.hash(password, salt)

}

export default passwordHasher