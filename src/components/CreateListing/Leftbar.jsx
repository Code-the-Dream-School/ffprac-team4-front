import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button, Grid, TextField, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const drawerWidth = 365;

const Leftbar = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [category, setCategory] = useState("");

  //To fill and storage ZipCode from User
  const ZipCodeInput = () => {
    const [zipCode, setZipCode] = useState("");
  };

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = () => {
    // You can handle file upload logic here
    console.log("Selected file:", selectedFile);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          display: "flex",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fff0",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", m: 1 }}>
          <Typography variant="h5">Create Listing</Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Box
            sx={{
              "& .MuiTextField-root": { marginTop: 1.8, width: "43ch" },
            }}
            noValidate
            autoComplete="off"
          >
            Input for ZipCode
            <TextField
              type="text"
              id="outlined-basic"
              label="Zip Code"
              // value={zipCode}
              // onChange={handleInputChange}
              // pattern="[0-9]{5}"
              // title="Five-digit zip code (numbers only)"
              required
            />
            <TextField id="outlined-basic" label="Title" />
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ marginTop: 1.8, minWidth: 343 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Category"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Art and Craft</MenuItem>
                  <MenuItem value={20}>cars</MenuItem>
                  <MenuItem value={30}>books</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <FormControl sx={{ marginTop: 1.8, minWidth: 343 }}>
              <InputLabel id="condition-select-label">Condition</InputLabel>
              <Select
                labelId="condition-select-label"
                id="condition-select"
                value={category}
                label="Condition"
                onChange={handleChange}
              >
                <MenuItem value={10}>New</MenuItem>
                <MenuItem value={20}>Used</MenuItem>
                <MenuItem value={30}>Like new</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ marginTop: 1.8, minWidth: 343 }}>
              <InputLabel id="delivery-select-label">Delivery</InputLabel>
              <Select
                labelId="delivery-select-label"
                id="delivery-select"
                // value={age}
                label="Delivery"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Pickup</MenuItem>
                <MenuItem value={20}>Delivery</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
            />
          </Box>
          <Divider sx={{ marginTop: "20px" }} />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ marginTop: "30px", width: "343px" }}
          >
            Upload photo
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", width: "343px" }}
          >
            Publish
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Leftbar;
