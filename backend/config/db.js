const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)

const connectDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        })
        

        console.log('MONGO DB CONNECTED'.green.italic.bold)
    } catch (error) {
        console.log('stuck ', error.message.red.bold)
        process.exit(1)
    }

}

module.exports = connectDB