import { useEffect } from "react";
import { Redirect } from "react-router";
export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    useEffect(() => {
      console.log("access secured page");
    }, []);
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) {
      return <Redirect to="/home" />;
    }
    return <Component {...props} />;
  };
  return WithNoAuth;
};
