'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: { type: String, default: 'todo', trim: true },
    description: { type: String, trim: true },
    done: { type: Boolean, default: false },
    createdAt  : { type : Date, default : Date.now  }
});

mongoose.model('Todo', TodoSchema);
