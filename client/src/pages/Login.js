import { WRContainer } from "./WaitingRoom";

const Login = () => {
  return (
    <main id="main">
      <WRContainer>
        <LoginForm />
      </WRContainer>
    </main>
  );
};

export const LoginForm = () => {
  return (
    <div className="col-lg-6 mx-auto mt-4">
      <h3 className="text-center text-primary">Please Sign In</h3>
      <hr />
      <form className="php-email-form">
        <div className="form-group mt-3">
          <input
            type="email"
            className="form-control"
            name="email"            
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="password"
            className="form-control"
            name="pswd"            
            placeholder="Password"
            required
          />
        </div>

        <div className="text-center mt-3">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
