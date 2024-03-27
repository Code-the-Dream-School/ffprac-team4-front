import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";

const Rightfeed = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1.5,
        },

        marginTop: "32px",
        flexGrow: 2,
        border: "1px solid lightgrey",
        borderRadius: "5px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Preview
      </Typography>

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "85vh",
          border: "1px solid lightgrey",
        }}
      >
        <CardActionArea sx={{ backgroundColor: "#f0f0f0" }}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/featured/?toys"
            alt="Toy picture"
          />
        </CardActionArea>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            borderLeft: "1px solid lightgrey",
            width: "300px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              Details
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Here will be Details
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              Condition
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Here will be Condition
            </Typography>
            <Divider sx={{ marginTop: "20px", width: "290px" }} />
            <Typography variant="body1" sx={{ mb: 1 }}>
              Seller information
            </Typography>
            <Typography variant="body1">Seller Name</Typography>
          </CardContent>

          <Button
            variant="contained"
            disabled
            sx={{
              marginTop: "20px",
              width: "290px",
              border: "2px solid lightgrey",
            }}
          >
            Message
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Rightfeed;
