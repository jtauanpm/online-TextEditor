# online-TextEditor
### In-browser text editor application that allows sharing and saving of plain texts online by specific url.

### 🚧 Prerequisites

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

### 🎲 Running the project

- Clone this repository
- Create a Database using MongoDB
- Create an .env file in the project root
- Paste this in your .env file and replace it with your username and password:
`
MONGODB_USERNAME=admin
MONGODB_PASSWORD=password
`

After this:
```bash
# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev:server

# The server will start on port:3000 - go to <http://localhost:3000>
```

### 🛠 Technologies

The following tools were used in building the project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [JavaScript](https://www.javascript.com/)