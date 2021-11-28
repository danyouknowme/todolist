import * as mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const List = mongoose.model('List', ListSchema);

export { List }
