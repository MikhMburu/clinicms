
import Breadcrumbs from "../components/Breadcrumbs";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const WaitingRoom = () => {
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
    <section id="contact" class="contact">
      <div class="container">
        <div class="row">{children}</div>
      </div>
    </section>
  );
};

export default WaitingRoom;
