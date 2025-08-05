import { Schema , model } from "yup";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        // match: 
        required: true,
    },
    password: {
        type: String ,
        required: true ,
    },
    role: {
        type: String, 
        enum: {
            values: ["superadmin", "admin", "user"],
            message: "пользователь с ролями уже существует"
        },
            
        default: "user",
        required: true ,
    },
    token: {
        type: String , 
        required: true,
    }
}, {versionKey: false, timestamps:true })

const User = model("user", userSchema)

export default User;


// import  { DataTypes,} from "sequelize"

// import sequelize from "./sequelize.js"


// const User = sequelize.define(
//     "user", {
//         email: {
//             type: DataTypes.STRING,
//             unique: {
//                 arga: true,
//                 msg: "Пользователь с таким email уже существует"
//             },
//             allowNull: false,
//             validate: {
//                 isEmail: {
//                     args: true,
//                     msg: "email должен содержать @ и быть без отступов"
//                 }

//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         role: {
//             type: DataTypes.STRING,
//             defaultValue: "user",
//             allowNull: false,
//                 validate: {
//                     isIn: {
//                         args: [["user","admin", "superadmin"]],
//                         msg: "Роль может быть только user , admin"
//                     }
//                 }

//         }
//     }
// )

// // User.sync({alter: true})

// export default User;