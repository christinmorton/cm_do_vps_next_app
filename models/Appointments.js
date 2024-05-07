import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema({ 
    client_id: { type: Schema.Types.ObjectId, ref: 'Client'},
    appointment_date: { type: Date, required: true},
    appointment_location: { type: String, required: true},
    timezone: { type: String, required: true},
    notes: { type: String },
}, { timestamps: true});

const Appointment = models.Appointments || model('Appointments', AppointmentSchema);

export default Appointment;