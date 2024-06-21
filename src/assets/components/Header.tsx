import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import select2 from "select2";

// @ts-expect-error: Вызов select2 на внешнем уровне -
// единственный способ, с помощью которого данный плагин заработал
select2();

import "select2/dist/css/select2.min.css";

const Header = () => {
  const selectRef = useRef(null);
  useEffect(() => {
    if (selectRef.current) $(selectRef.current).select2();
  }, []);

  const onChange = () => {
    //..
  };
  return (
    <header className="header-main">
      <h1>
        Cattio <FontAwesomeIcon icon={faCat} />
      </h1>
      <select
        className="header-category-select"
        onChange={onChange}
        ref={selectRef}
      >
        <option>Bengal</option>
        <option>Scottish Fold</option>
        <option>Sphynx</option>
        <option>Siamese</option>
      </select>
    </header>
  );
};

export default Header;
