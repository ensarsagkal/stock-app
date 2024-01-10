import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Formik, Form } from "formik";
import { object, string, number } from "yup";
import useStockCalls from "../service/useStockCalls";

export const AddSchema = object({
  name: string().required("Marka adı zorunludur"),
  phone: number().required("Telefon zorunludur"),
  address: string().required("Adres zorunludur"),

  image: string()
    .url("Lütfen geçerli bir url giriniz.")
    .required("Url zorunludur"),
});

const AddFirm = ({handleClose}) => {
  const {addFirm}= useStockCalls()
  return (
    <Formik
    initialValues={{
      name: "",
      phone: "",
      address: "",
      image: "",
     
    }}
    validationSchema={AddSchema}
    onSubmit={(values, actions) => {
      //TODO login(post) istegi
      addFirm(values);
      actions.resetForm();
      actions.setSubmitting(false);
      handleClose()
    }}
    >
        {({ values, handleChange, errors, touched, handleBlur })=>(
            <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Firm name"
          name="name"
          id="name"
          type="text"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          label="Phone"
          name="phone"
          id="phone"
          type="text"
          variant="outlined"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={errors.phone}
        />
        <TextField
          label="Address"
          name="address"
          id="address"
          type="text"
          variant="outlined"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={errors.address}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="url"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && Boolean(errors.image)}
          helperText={errors.image}
        />

        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
        )}
    
    </Formik>
  );

};


export default AddFirm;






