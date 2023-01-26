
import Wysiwyg from "./Wysiwyg";

const NotesEditor = () => {
  
  return (
    <div className="col-md-8">
      <h6 className="fw-bolder text-danger text-uppercase mb-1">
        Patient Notes
      </h6>
      <hr />
      <Wysiwyg/>
    </div>
  );
};

export default NotesEditor;
