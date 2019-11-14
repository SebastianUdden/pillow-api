import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Wiki from './wiki';

const connectDb = () => {
    return mongoose
        .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .catch(e => console.error(e));
};

const models = { User, Message, Wiki };
export { connectDb };

export default models;
