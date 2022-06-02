import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import { Link } from "react-router-dom";
import Hudalogo from '../assets/images/bg/bnav.png'

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img src={Hudalogo} width="200px"/>
      </div>
      {/* <LogoDark /> */}
    </Link>
  );
};

export default Logo;
