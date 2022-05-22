const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
})

const PageModel = mongoose.model("Page", pageSchema);

module.exports = PageModel;