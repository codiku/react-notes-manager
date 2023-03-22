import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

export function Signin() {
  const form = (
    <div>
      <h2>
        Signin <br />
        to access your team notes
      </h2>
      <form>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <ButtonPrimary>Sign in !</ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );

  return <>{form}</>;
}
