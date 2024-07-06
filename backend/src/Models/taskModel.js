const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    status: {
        type: String,
        enum: {
            values: ["pending", "ongoing", "completed"],
            message: 'Status must be either pending, ongoing, or completed'
        },
        default: "pending"
    },
}, {
    timestamps: true
});

const tasks = mongoose.model('tasks', taskSchema);

module.exports = tasks;
