import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SummaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  onCheckBoxClick = (e) => {
    console.log(e.target.checked);
    document.getElementById("confirm-order").disabled = !e.target.checked;
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to Terms and Conditions"
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
