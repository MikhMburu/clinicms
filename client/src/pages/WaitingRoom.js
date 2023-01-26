
// Imports
  // Libraries
import {useQuery} from "@apollo/client"
  // Components
import Breadcrumbs from "../components/Breadcrumbs";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";
  // Files and functions
import {displayPeople} from "../apollo-schema/query";

const WaitingRoom = () => {
  const {data, loading} = useQuery(displayPeople);
  if(!loading){
    data && console.log(data)
  }
  return (
    
    <main className="main">
      <Breadcrumbs/>
      <WRContainer>
        <PersonForm />
        <PersonList />
      </WRContainer>
    </main>
    
  );
};

export const WRContainer = ({ children }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
};

export default WaitingRoom;
