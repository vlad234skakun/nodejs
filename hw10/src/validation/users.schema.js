import * as Yup from "yup";

export const PasswordValidate = Yup.string()
    .trim()
    .min(8, "Пароль должен быть минимум 8 символов")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Пароль должен содержать минимум одну заглавную, одну строчную букву, цифру и спецсимвол"
    )
    .required("Пароль обязателен")

    export const emailValidation = Yup.string()
    .trim()
    .email("Некорректный email")
    .required("Email обязателен")

export const adminAddSchema = Yup.object({
  email: emailValidation,
  password: PasswordValidate
});

export const adminChangePasswordSchema = Yup.object({
    oldPassword: PasswordValidate,
    newPassword: PasswordValidate
})

export const userDeleteSchema = Yup.object({
   password: PasswordValidate
})

export const userUpdateRole = Yup.object({
  email: emailValidation
})


