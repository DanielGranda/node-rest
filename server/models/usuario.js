const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

//enum rol
let rolesValidos = {
    values: ['CONDUCTOR', 'REPRESENTANTE'],
    message: '{VALUE} no es un rol válido'
};

let usuarioShema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El mail es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio si que si']
    },
    img: {
        type: String,
        required: [false]
    },
    role: {
        type: String,
        enum: rolesValidos,
        default: 'CONDUCTOR'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

usuarioShema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
usuarioShema.plugin(uniqueValidator, { message: 'PATH debe ser único' });
module.exports = mongoose.model('usuario', usuarioShema);