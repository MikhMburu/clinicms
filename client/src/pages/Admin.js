import AdminIcon from "../components/AdminIcon"
import Breadcrumbs from "../components/Breadcrumbs"



const Admin = () => {
  return (
    
    <main className="main">
      <Breadcrumbs/>
    <AdminContainer>
      {adminIconObj.map(ico=>{
        return (
          <AdminIcon key={ico.icon} icon={ico.icon} heading={ico.heading} desc={ico.desc} shape={ico.class} path={ico.path}/>
        )
      })}
    </AdminContainer>
    </main>
    
  )
}

export const AdminContainer = ({children}) =>{
  return (
    <section id="featured" className="featured">
        <div className="container">
          <div className="row">
            {children}
          </div>
          </div>
          </section>
  )
}

const adminIconObj = [
  {
    icon: "stethoscope",
    heading: "Doctor's View",
    desc: "View the application from the Doctor's perspective",
    class:"col-lg-4",
    path:"/doctor"
  },
  {
    icon: "group",
    heading: "Users",
    desc: "Add and edit users and staff",
    class:"col-lg-4 mt-4 mt-lg-0",
    path: "/people"
  },
  {
    icon: "hourglass_top",
    heading: "Waiting Room view",
    desc: "View the application from the receptionists perspective",
    class:"col-lg-4 mt-4 mt-lg-0",
    path: "/reception"
  },
]
export default Admin