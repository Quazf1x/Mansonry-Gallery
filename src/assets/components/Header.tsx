import data from "../API/catBreedsData.ts";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.css";

// @ts-expect-error: Вызов select2 на внешнем уровне -
// единственный способ, с помощью которого данный плагин заработал
select2();

type headerType = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setCategory }: headerType) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const $select = $(selectRef.current).select2({
        data: data,
      });

      $select.on("change", (e) => {
        // Преобразование типа, тк если если его обозначить сразу
        // При объявлении e, TS выдает ошибку
        const target = e.target as HTMLSelectElement;
        setCategory(target.value);
      });
    }
  }, [setCategory]);

  return (
    <header className="header-main">
      <h1>
        Cattio <FontAwesomeIcon icon={faCat} />
      </h1>
      <div>
        <label className="header-category-label" htmlFor="category-select">
          Breed:
        </label>
        <select
          className="header-category-select "
          ref={selectRef}
          id="category-select"
        ></select>
      </div>
    </header>
  );
};

export default Header;
