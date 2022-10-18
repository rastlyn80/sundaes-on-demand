import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  </Popover>
);

class SummaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  onCheckBoxClick = (e) => {
    console.log(e.target.checked);
    document.getElementById("confirm-order").disabled = !e.target.checked;
  };

  checkboxLabel = () => {
    return (
      <span>
        I agree to{" "}
        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
          <span style={{ color: "blue" }}> Terms and Conditions</span>
        </OverlayTrigger>
      </span>
    );
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label={this.checkboxLabel()}
            onChange={() => this.setState({ checked: !this.state.checked })}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          id="confirm-order"
          disabled={!this.state.checked}
        >
          Confirm order
        </Button>
      </Form>
    );
  }
}

export default SummaryForm;
