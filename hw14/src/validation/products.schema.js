import * as Yup from "yup";

export const addProductSchema = Yup.object({
  name: Yup.string()
    .min(2, "Название должно быть минимум из 2 символов")
    .required("Название обязательно"),
    
  price: Yup.number()
    .typeError("Цена должна быть числом")
    .positive("Цена должна быть положительной")
    .required("Цена обязательна"),

  category: Yup.string()
    .length(24, "Некорректный ID категории")
    .required("Категория обязательна"),
});
