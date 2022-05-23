const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@texteditor.ou1y0.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('an error occurred while trying to connect to the database: ', error);
        }
        return console.log('successfully connected to the database');    
    });
}

module.exports = connectToDatabase;