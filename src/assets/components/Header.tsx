import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="header-main">
      <h1>
        Cattio <FontAwesomeIcon icon={faCat} />
      </h1>
      <select>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
        <option>Category 4</option>
      </select>
    </header>
  );
};

export default Header;
