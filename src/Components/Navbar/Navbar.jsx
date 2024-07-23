import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        Travelo
        <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className="nav-contact">Contnet</li>
        </ul>
      </div>
    </div>
  );
};
