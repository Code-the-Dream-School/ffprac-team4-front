import styles from "./ListingDetail.module.css";
import { Button } from '@mui/base/Button';
import { Input } from '@mui/base/Input';

const ListingDetail = () => {
  return (
    <div>
      <div class="leftPanel">
        {/* block with images */}
      </div>
      <div class="rightPanel">
        <h1>Toy name</h1>
        <p>
        Listed *date* ago in *Location* {/* possibly need to identify town or district according the zip code*/}
        </p>
        <p><span>Delivery method 1</span><span>Delivery method 2</span></p>
        <div>
          <Button>Message</Button>
          <Button>Add to favorites</Button>
          <Button>Share</Button>
        </div>
        <h2>Details</h2>
        <div>
          <div>Category</div>
          <div>Condition</div>
          <div>Description</div>
        </div>
        <div>
          <div>*Category*</div>
          <div>*Condition*</div>
          <div>*Description*</div>
        </div>
        <h2>Toy giver information</h2>
        <div>
          <img src=""></img>
          <p>*Toy giver name*</p>
        </div>
        <div>Joined PlayItForward in *date*</div>
        <h2>Send a message</h2>
        <TextField
          id="standard-multiline-flexible"
          label="Is this still available?"
          multiline
          maxRows={4}
          variant="standard"
        />
        
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default ListingDetail;
