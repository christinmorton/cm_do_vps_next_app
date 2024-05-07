import { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema({
    client_id: { type: Schema.Types.ObjectId, ref: 'Client'},
    invoice_number: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Unpaid'
    },
 }, { timestamps: true});

const Invoice = models.Invoices || model('Invoices', InvoiceSchema);

export default Invoice;