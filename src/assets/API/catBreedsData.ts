// id в данных объектах равны id соответствующих пород в api
/*
const data = [
  { id: "category-breed", text: "Порода", disabled: true },
  {
    id: "beng",
    text: "Бенгальская",
    selected: true,
  },
  {
    id: "sfol",
    text: "Шотландская вислоухая",
  },
  {
    id: "sphy",
    text: "Сфинкс",
  },
  {
    id: "siam",
    text: "Сиамская",
  },
];
 */

const data = [
  {
    text: "Порода",
    children: [
      {
        id: "beng",
        text: "Бенгальская",
        selected: true,
      },
      {
        id: "sfol",
        text: "Шотландская вислоухая",
      },
      {
        id: "sphy",
        text: "Сфинкс",
      },
      {
        id: "siam",
        text: "Сиамская",
      },
      {
        id: "sibe",
        text: "Сибирская",
      },
      {
        id: "sing",
        text: "Сингапурская",
      },
      {
        id: "snow",
        text: "Сноу-Шу",
      },
      {
        id: "soma",
        text: "Сомали",
      },
      {
        id: "rblu",
        text: "Русская Голубая",
      },
      {
        id: "mcoo",
        text: "Мейн Кун",
      },
      {
        id: "abys",
        text: "Абиссинская",
      },
    ],
    element: HTMLOptionElement,
  },
];

export default data;
