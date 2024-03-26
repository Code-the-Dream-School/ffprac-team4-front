import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import appLogo from "../../assets/AppLogo.png";
import GoogleIcon from "./GoogleIcon";
import { GoogleLogin } from "react-google-login";

const handleLoginSuccess = (response) => {
  console.log("Login Success:", response);
  // Handle login success, e.g., store the user's token, navigate to another page
};

const handleLoginFailure = (error) => {
  console.log("Login Failed:", error);
  // Handle login failure, e.g., show an error message
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        PlayItForward
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              my: "auto",
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <img
                src={appLogo}
                alt="App Logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography component="p" variant="p" sx={{ mt: 3, mb: 2 }}>
              Welcome to PlayItForward!
            </Typography>
            <Box
              // component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              {/* <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                color="primary"
                fullWidth
                onSubmit={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Continue with Google
              </Button> */}
              <GoogleLogin
                clientId="927547523211-nockahs0aft0mu0d82vod1kvglvu3d43.apps.googleusercontent.com"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <Button
                    variant="contained"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    sx={{
                      mt: 3,
                      mb: 2,
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)",
                      },
                    }}
                  >
                    Continue with Google
                  </Button>
                )}
              />
              {/* <GoogleLogin
                clientId="927547523211-nockahs0aft0mu0d82vod1kvglvu3d43.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
              /> */}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
