import "./Navbar.css";
import { CiUser } from "react-icons/ci";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="logo-title">ColdEmails.space 📮</p>
      </div>
      <div className="nav-links">
        <p className="nav-item">Docs</p>
        <p className="nav-item">Resources</p>
        <p className="nav-item">Spread coolness 🚀</p>
        <button className="login-button nav-item">
          Login
          <CiUser className="user-icon" size="30px" color="black" />
        </button>
      </div>
    </div>
  );
}
export default Navbar;
