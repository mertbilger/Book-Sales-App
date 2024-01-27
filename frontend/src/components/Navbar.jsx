import { useLogout } from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  const { admin } = useAuthContext();

  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="#">
            M&B
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor04"
            aria-controls="navbarColor04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor04">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className=" nav-link active mx-3" href="#">
                  Ana Sayfa
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ürünler
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hakkımızda
                </a>
              </li>
            </ul>
            {admin && (
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-info mx-5"
              >
                Panel Çıkış
              </button>
            )}

            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
