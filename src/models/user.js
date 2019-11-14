import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    location: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

userSchema.statics.findByLogin = async function(login) {
    let user = await this.findOne({
        username: login,
    });

    if (!user) {
        user = await this.findOne({ email: login });
    }

    return user;
};

userSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;
