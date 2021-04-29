import SignInForm from "../../../components/forms/sign-in-form/SignInForm";
import {withNoAuth}  from "../../../hoc/withNoAuth";

function SignIn(props){
    return <SignInForm/>;
}
export default withNoAuth(SignIn);
