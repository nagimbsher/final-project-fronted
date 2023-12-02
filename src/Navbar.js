// import { NavLink } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <div className="navItems">
//           <NavLink
//             to="/bed"
//             className={({ isActive }) => "navButton" + (isActive ? " active" : "")}
//           >
//             Bed
//           </NavLink>
//           <NavLink
//             to="/airbnb"
//             className={({ isActive }) => "navButton" + (isActive ? " active" : "")}
//           >
//             Airbnb
//           </NavLink>
//           <NavLink
//             to="/wifi"
//             className={({ isActive }) => "navButton" + (isActive ? " active" : "")}
//           >
//             Wi-Fi
//           </NavLink>
//           {/* ... other links */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=""><i className="bi bi-bed"></i></a>
            </li>
            {/* ... other nav items */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the bootstrap icons stylesheet
// import "./navbar.css";
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <div className="navItems">
//           <button className="navButton">
//             <i className="bi bi-bed"></i> Bed
//           </button>
//           <button className="navButton">
//             <i className="bi bi-house-door"></i> Airbnb
//           </button>
//           <button className="navButton">
//             <i className="bi bi-wifi"></i> Wi-Fi
//           </button>
//           <button className="navButton">
//             <i className="bi bi-cup-straw"></i> Drinks
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







// import "./navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBed } from "@fortawesome/free-solid-svg-icons";
// import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
// import { faWifi } from "@fortawesome/free-solid-svg-icons"; 
// import {faMugSaucer}  from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <div className="navItems">
//           <button className="navButton">
//             <FontAwesomeIcon icon={faBed} /> Bed
//           </button>
//           <button className="navButton">
//             <FontAwesomeIcon icon={faAirbnb} /> Airbnb
//           </button>
//           <button className="navButton">
//             <FontAwesomeIcon icon={faWifi} /> Wi-Fi
//           </button>
//           <button className="navButton">
//           <FontAwesomeIcon icon={faMugSaucer} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





