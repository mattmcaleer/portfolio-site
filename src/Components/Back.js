import { Link } from "react-router-dom";

function Back() {
  return (
    <div className="back">
      <Link to={'/'} className="arrow-back">
        ➔
      </Link>
    </div>
  )
}

export default Back;