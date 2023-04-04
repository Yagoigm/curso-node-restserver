import mongoose from "mongoose"

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS)

        console.log("DB online")

    } catch (error) {
        console.log(error)
        throw new Error("Error starting DB")
    }

}




export{
    dbConnection
}