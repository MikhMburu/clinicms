const AdminIcon = ({icon, heading, desc, shape}) => {
  return (
    <div className={shape}>
      <div className="icon-box">
        <i className="material-symbols-outlined">{icon}</i>
        <br />
        <h3>
          <a href="!#">{heading}</a>
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AdminIcon;
