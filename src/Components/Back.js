import { Link } from "react-router-dom";
import Home from "./Home";

function Back() {
  return (
    <div>
      <Link to={'/'} className="back">←</Link>
    </div>
  )
}

export default Back;