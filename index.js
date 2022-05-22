const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')

dotenv.config();

connectToDatabase();

require("./src/server/server");

