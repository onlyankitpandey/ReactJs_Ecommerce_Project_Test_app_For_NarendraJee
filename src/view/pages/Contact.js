import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css"

const Contact = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success",
        });
        navigate("/products");
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1>Contact Page</h1>
          <hr />
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <p className="hometext">
                Contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio earum officiis debitis vel tenetur quos animi vero
                voluptates reiciendis, omnis sed in libero temporibus deleniti
                pariatur expedita corporis officia. Odit enim, quasi facere
                magnam earum officiis ipsa aliquid impedit velit quibusdam dolor
                ex esse ratione explicabo quod, culpa temporibus? Dolorem
                deleniti doloremque maxime quas deserunt. Ex aspernatur saepe
                illo eaque corrupti placeat, aperiam nulla adipisci itaque quos
                necessitatibus iure at minus non delectus ratione quod ad. Alias
                dolore perferendis est expedita iure! Nostrum laborum tempore
                amet commodi voluptas accusamus enim repudiandae, quia odio
                cumque, laboriosam architecto illo! Aliquid, fuga quis.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                id="registration-form"
                onSubmit={handleSubmit}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  type="number"
                />
                <TextField
                  margin="normal"
                  required
                  multiline
                  fullWidth
                  id="message"
                  name="message"
                  label="Message"
                  type="text"
                />
                <FormControlLabel
                  control={
                    <Checkbox value="agree" color="primary" name="tc" id="tc" />
                  }
                  label="I agree to term and condition."
                />
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, px: 5 }}
                  >
                    Contact Us
                  </Button>
                </Box>
                {error.status ? (
                  <Alert severity={error.type}>{error.msg}</Alert>
                ) : (
                  ""
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
