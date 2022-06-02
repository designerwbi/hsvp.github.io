import { FormGroup } from "reactstrap";
import {Forms} from './'
const FormGroup = () =>{
    return(
        <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}