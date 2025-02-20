import { Link } from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Registration Successful!</h1>
      <p>Thank you for registering.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
