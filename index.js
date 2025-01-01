"use strict";

function onClick() {
  // см выбранное значение сущности
  let type = document.getElementById("type");
  let selType = type.options[type.selectedIndex].value;
  // см выбранный id сущности
  let idType = document.getElementById("idAtr").value;
  const load = document.querySelector(".load");

  if (!idType) {
    document.getElementById("text").innerHTML = "";
    document.getElementById("result").innerHTML =
      "Введите id сущности от 1 до 10, параметр не заполнен!";
    return;
  }

  load.classList.remove("progress");
  console.log("Выбранная сущность: " + selType);
  console.log("Выбранный id: " + idType);

  fetch("https://swapi.py4e.com/api/" + selType + "/" + idType)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      // try {
      console.log(user);
      document.getElementById("text").innerHTML = "";
      document.getElementById("result").innerHTML = "";
      // см какую сущность выбрал пользователь, выводим соотв поля
      switch (selType) {
        case "films":
          if (!user.director) {
            document.getElementById("result").innerHTML = "Не найден!";
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Режиссер: ${user.director} <br><br> Название фильма: ${user.title}`;
          }
          break;
        case "people":
          if (!user.name) {
            document.getElementById("result").innerHTML = "Не найден!";
            return;
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Имя персонажа: ${user.name} <br><br> Рост персонажа: ${user.height}`;
          }
          break;
        case "planets":
          if (!user.name) {
            document.getElementById("result").innerHTML = "Не найден!";
            return;
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Название планеты: ${user.name} <br><br> Диаметр планеты: ${user.diameter}`;
          }
          break;
        case "species":
          if (!user.name) {
            document.getElementById("result").innerHTML = "Не найден!";
            return;
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Название вида персонажа: ${user.name} <br><br> Классификация вида персонажа: ${user.classification}`;
          }
          break;
        case "starships":
          if (!user.name) {
            document.getElementById("result").innerHTML = "Не найден!";
            return;
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Название космического корабля: ${user.name} <br><br> Модель коробля: ${user.model}`;
          }
          break;
        case "vehicles":
          if (!user.name) {
            document.getElementById("result").innerHTML = "Не найден!";
            return;
          } else {
            document.getElementById(
              "text"
            ).innerHTML = `Название транспорта: ${user.name}  <br><br> Модель: ${user.model}`;
          }
          break;
        default:
          document.getElementById("result").innerHTML = "Не найден!";
      }
    })
    .catch((error) => {
      document.getElementById("result").innerHTML = "Ошибка: " + error;
      console.log(error);
    })
    .finally(() => load.classList.add("progress"));
}