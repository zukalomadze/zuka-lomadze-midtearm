import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { login } from "../../../services";
import { useState } from "react";
function SignInForm(props) {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const { token } = await login(data);
    if (token) {
      localStorage.setItem("auth-token", JSON.stringify(token));
      history.replace("/home");
    } else {
      setMessage("wrong email or password");
    }
  };

  return (
    <div className="col-6">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", { required: true })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", { required: true })}
          />
        </div>
        <h5>{message}</h5>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
