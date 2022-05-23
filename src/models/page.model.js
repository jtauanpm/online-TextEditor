const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    content: String,
})

module.exports = mongoose.model("Page", pageSchema);