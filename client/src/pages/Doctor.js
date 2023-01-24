import Breadcrumbs from "../components/Breadcrumbs"
import NotesEditor from "../components/NotesEditor"
import PatientDetails from "../components/PatientDetails"
import { WRContainer } from "./WaitingRoom"


const Doctor = () => {
  return (
    
      <main className="main">
        <Breadcrumbs/>
        <WRContainer>
          <PatientDetails/>
          <NotesEditor/>
        </WRContainer>        
      </main>
      
  )
}

export default Doctor