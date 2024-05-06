import { Schema, model, models } from "mongoose";

const ClientMessageCustomerSchema = new Schema({ });

const ClientMessageCustomer = models.ClientMessageCustomers || model('ClientMessageCustomers', ClientMessageSchema);