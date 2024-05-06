import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({ });

const Message = models.Messages || model('Messages', MessageSchema);