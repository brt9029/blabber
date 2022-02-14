const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        user: {
            type: String,
            unique: true,
            required: 'You need to provide a user name!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            pattern : "@mongodb\.com$",
            required: 'You must provide an e-mail!',
            trim: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;