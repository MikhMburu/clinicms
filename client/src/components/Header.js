import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.main.user);
  
  
  if(user){
    const roles = {
      admin: [
        { id:1,path: "/admin", name: "Dashboard" },
        { id:2,path: "/doctor", name: "Doctor" },
        { id:3,path: "/people", name: "People" },
        { id:4,path: "/reception", name: "Waiting Room" },
      ],
      doctor: [
        { id:5,path: "/doctor", name: "Doctor" },
        { id:6,path: "!#", name: "Patients" },
      ],
      receptionist: [{ id:7,path: "/reception", name: "Waiting Room" }],
    };
    const {admin, doctor, receptionist} = roles
    let displayLinks;
    switch (user.role) {
      case "Admin":
        
        displayLinks = admin.map(item=><Navlinks key={item.id} path={item.path} desc={item.name}/>);
        break;
      case "Doctor":
        
        displayLinks = doctor.map(item=><Navlinks key={item.id} path={item.path} desc={item.name}/>);
        break;
      default:
        
        displayLinks = <Navlinks key={receptionist.id} path={receptionist.path} desc={receptionist.name}/>
        break;
    }

    return (
      <NavContainer>
        {displayLinks}
      </NavContainer>
    );
  }else{
    return null
  }  
  
};

const Navlinks = ({path, desc}) => {
  return (
    <li>
      <Link to={path}>{desc}</Link>
    </li>
  );
};

const NavContainer = ({children})=>{
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>CLINICMS</h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            {children}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  )
}

export default Header;
