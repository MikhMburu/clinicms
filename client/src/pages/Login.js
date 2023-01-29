// Import Libraries
import {useState, useEffect} from "react";
import { useMutation } from "@apollo/client";
import {useDispatch} from "react-redux";
import jwtDecode from "jwt-decode";
// Import functions and files
import { WRContainer } from "./WaitingRoom";
import {LOGIN} from "../apollo-schema/mutation";
import {loginUser} from "../features/main/mainSlice"

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
  const [logDetails, setLogDetails]= useState(null)
  const [login, {data, loading}] = useMutation(LOGIN);
  const dispatch = useDispatch()

  useEffect(()=>{    
    if(data){
      localStorage.setItem("token", data.login)
      const user = jwtDecode(data.login)
      dispatch(loginUser(user))
    }
    // eslint-disable-next-line
  },[data])

  // Function definitions
  const onChangeHandler = e =>{
    setLogDetails({...logDetails, [e.target.name]: e.target.value})
  }
  const onSubmit = async e => {
    e.preventDefault();
    await login({variables:{input: logDetails}});
    // if(!loading && data)
    // data && console.log(data)
  }
  return (
    <div className="col-lg-6 mx-auto mt-4">
      <h3 className="text-center text-primary">Please Sign In</h3>
      <hr />
      <form className="php-email-form" onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <input
            type="email"
            className="form-control"
            name="email"            
            placeholder="Your Email"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="password"
            className="form-control"
            name="password"            
            placeholder="Password"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="text-center mt-3">
          <button type="submit">{loading?"Logging in":"Log In"}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
