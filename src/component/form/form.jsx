import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { PatternFormat } from "react-number-format";
import { motion } from "framer-motion";
import { validation } from "./validation";
export default function Form() {
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    phone: "",
    size: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      console.log({
        name: values.name,
        lastName: values.lastName,
        age: values.age,
        phone: values.phone,
        size: values.size,
      });
      formik.setValues(initialValues);
    },
  });
  return (
    <>
      <motion.form
        id="order"
        className="checkout-form"
        onSubmit={formik.handleSubmit}
        initial={{ opacity: 0, x: 10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}>
        <TextField
          className="checkout-input"
          type="text"
          name="name"
          id="name"
          label="Your Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <TextField
          className="checkout-input"
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          label="Your Last Name"
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <TextField
          label="Your Age"
          className="checkout-input"
          type="text"
          name="age"
          id="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <PatternFormat
          className="checkout-input"
          format="+380 (##) #### ###"
          allowEmptyFormatting
          mask="#"
          type="text"
          name="phone"
          id="phone"
          onChange={formik.handleChange}
          placeholder="Your Phone Number"
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
        <button
          type="submit"
          className="form-btn accept-btn"
          onSubmit={formik.handleSubmit}>
          Order
        </button>
      </motion.form>
    </>
  );
}
