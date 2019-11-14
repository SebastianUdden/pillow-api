import mongoose from 'mongoose';

const wikiSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    secondaryText: {
        type: String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

const Wiki = mongoose.model('Wiki', wikiSchema);

export default Wiki;
