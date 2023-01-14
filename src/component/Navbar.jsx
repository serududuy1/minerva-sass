import logo from "../assets/img/Logo1.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-spacing">
        <div className="nav-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-mid">
          <ul>
            <li>Home</li>
            <li>Testimoni</li>
            <li>Contact</li>
            <li>Masuk</li>
          </ul>
        </div>
        {/* <div className="nav-right">
          <button>logout</button>
        </div> */}
      </div>
    </div>
  );
};
export default Navbar;
