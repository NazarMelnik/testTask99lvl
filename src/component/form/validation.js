import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  phone: Yup.string()
    .test("valid-format", "required!", (value) => value.indexOf("#") === -1)
    .required("required!"),
  size: Yup.string(),
});

export { validation };
