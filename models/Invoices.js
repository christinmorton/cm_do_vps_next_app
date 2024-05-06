import { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema({ });

const Invoice = models.Invoices || model('Invoices', InvoiceSchema);