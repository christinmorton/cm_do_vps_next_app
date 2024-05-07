import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User'},
    content: {
        type: String,
        required: true
    },
 }, {timestamps: true});

const Message = models.Messages || model('Messages', MessageSchema);

export default Message;