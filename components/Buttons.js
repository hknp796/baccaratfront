import { Container, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
function Buttons(props) {
  // console.log("props",props);
  return (
    <Container className="mt-5 text-center px-5">
      <Button
        variant="success"
        type="submit"
        className="mt-1 w-25 mx-4"
        onClick={props.addSearch}
      >
        <Icon.PlusCircle className="" /> Add New Search
      </Button>
      <Button variant="success" type="submit" className="mt-1 w-25 ">
        Search All
      </Button>
    </Container>
  );
}

export default Buttons;
