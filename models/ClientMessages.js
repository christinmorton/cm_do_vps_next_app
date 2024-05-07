import { Schema, model, models } from "mongoose";

const ClientMessageSchema = new Schema({
    client_id: {type: Schema.Types.ObjectId, ref: 'Client'},
    content: {
        type: String,
        required: true
    },
 }, { timestamps: true});

const ClientMessage = models.ClientMessages || model('ClientMessages', ClientMessageSchema);

export default ClientMessage;