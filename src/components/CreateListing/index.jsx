import { Container, Button, Input } from "@mui/material";
import Leftbar from "./Leftbar";
import Rightfeed from "./Rightfeed";

const CreateListing = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <Leftbar />
      <Rightfeed />
    </Container>
  );
};

export default CreateListing;
