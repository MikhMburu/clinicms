import Breadcrumbs from "../components/Breadcrumbs"
import PersonForm from "../components/PersonForm"
import PersonList from "../components/PersonList"
import { WRContainer } from "./WaitingRoom"


const People = () => {
  return (
    
    <main className="main">
      <Breadcrumbs/>
      <WRContainer>
        <PersonForm/>
        <PersonList/>
      </WRContainer>
    </main>
    
  )
}

export default People