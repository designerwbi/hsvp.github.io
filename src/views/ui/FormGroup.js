import { FormGroup } from "reactstrap";
import {Forms1} from './Forms'
import { Nav } from "reactstrap";
const FormNav = () =>{
    return(
        <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/Forms1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Forms1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}
export default FormNav