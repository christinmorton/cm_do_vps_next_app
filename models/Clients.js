import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({ });

const Client = models.Clients || model('Clients', ClientSchema);