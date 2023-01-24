
const PersonList = () => {
  return (
    <div className="col-lg-6 mt-1 testimonials">
      <PersonItem/>
      <PersonItem/>
      <PersonItem/>
      <PersonItem/>
      <PersonItem/>
    </div>
  );
};

export const PersonItem = ()=>{
  return (
    <div className="testimonial-item border-bottom mb-1">
        <h3>Michael Mburu</h3>
        <h4>0734506809</h4>
        <p>mikhmburu@live.com</p>
        <button className="btn btn-outline-dark mb-0">Add to queue</button>
      </div>
  )
}

export default PersonList;
