import { Schema, model, models } from "mongoose";

const StripeCustomerSchema = new Schema({ });

const StripeCustomer = models.StripeCustomers || model('StripeCustomers', StripeCustomerSchema);