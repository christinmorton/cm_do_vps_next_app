import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({ 
    firstname: {
        type: String,
        required: [true, 'Please add name'],
      },
    lastname: {
        type: String,
        required: [true, 'Please add name'],
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please add a valid email',
        ],
      },
      password: {
        type: String,
        // required: [true, 'Please add a password'],
        minlength: 8,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});


// Match user entered password to hashed password in database
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };


const User = models.Users || model('Users', UserSchema);