import data from "../API/catBreedsData.ts";
import { categoryContext } from "./CategoryProvider.tsx";

import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useContext } from "react";
import "jquery";
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.min.css";

// @ts-expect-error: Вызов select2 на внешнем уровне -
// единственный способ, с помощью которого данный плагин заработал
select2();

const Header = () => {
  const { setCategory } = useContext(categoryContext);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const $select = $(selectRef.current).select2({ data: data });

      $select.on("change", (e) => {
        // Преобразование типа, тк если если его обозначить сразу
        // При объявлении e, TS выдает ошибку
        const target = e.target as HTMLSelectElement;
        setCategory(target.value);
      });
    }
  }, []);

  return (
    <header className="header-main">
      <h1>
        Cattio <FontAwesomeIcon icon={faCat} />
      </h1>
      <select className="header-category-select" ref={selectRef}>
        <option value="beng">Бенгальская</option>
        <option value="sfol">Скоттиш Фолд</option>
      </select>
    </header>
  );
};

export default Header;
