import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema({ });

const Appointment = models.Appointments || model('Appointments', AppointmentSchema);