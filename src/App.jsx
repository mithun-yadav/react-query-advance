import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div
      className="linksParentDiv"
      style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
    >
      <Link to="/paginated">paginated</Link>
      <Link to="/parallel">parallel</Link>
      <Link to="/optimistic">optimistic</Link>
      <Link to="/dependant">dependant</Link>
    </div>
  );
}

export default App;
