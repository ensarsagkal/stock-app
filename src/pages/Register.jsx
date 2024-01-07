import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form } from "formik"
import { object, string } from "yup"
import TextField from "@mui/material/TextField"

const Register = () => {
  const navigate = useNavigate()
const registerSchema=object({
  username:string().required("Lütfen kullanıcı adı giriniz"),
  firstname:string().required("Lütfen adınızı giriniz"),
  lastname:string().required("Lütfen soyadınızı  giriniz"),
  email: string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Email girişi zorunludur"),
  password: string()
    .required("Şifre zorunludur.")
    .min(8, "Şifre en az 8 karakter içermelidir")
    .max(16, "Şifre en falza 16 karakter içermelidir")
    .matches(/\d+/, "Şifre en az bir rakam içermelidir")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
    .matches(
      /[@$!%*?&]+/,
      "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
    ),
})
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
<Formik
initialValues={{username:"",firstname:"",lastname:"",email:"",password:""}}
validationSchema={registerSchema}
onSubmit={(values, actions) => {
  //TODO login(post) istegi
  login(values)
  actions.resetForm()
  actions.setSubmitting(false) //? isSubmitting
  //? veriler global state'e aktırlabilir
  //? navigasyon yapılabilir
  //? tost yapılabilr
}}
>

</Formik>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="User Name"
              name="username"
              id="userName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="First Name"
              name="first_name"
              id="firstName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Last Name"
              name="last_name"
              id="last_name"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
            />
            <TextField
              label="password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
            />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
