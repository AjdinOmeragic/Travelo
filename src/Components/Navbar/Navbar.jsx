import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        Travelo
        <ul className="nav-menu">
          <li className="nav-menu-links">Home</li>
          <li className="nav-menu-links">Explore</li>
          <li className="nav-menu-links">About</li>
          <li className="nav-menu-links">Contnet</li>
        </ul>
      </div>
    </div>
  );
};

//className="nav-contact"