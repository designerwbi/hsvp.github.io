import { Route, useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { Link} from "react-router-dom";
const App = () => {
  const routing = useRoutes(Themeroutes);
  return <div className="dark">{routing}</div>;
};

export default App;
