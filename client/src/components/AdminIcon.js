import {Link} from "react-router-dom";
const AdminIcon = ({icon, heading, desc, shape, path}) => {
  return (
    <div className={shape}>
      <div className="icon-box">
        <i className="material-symbols-outlined">{icon}</i>
        <br />
        <h3>
          <Link to={path}>{heading}</Link>
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AdminIcon;
