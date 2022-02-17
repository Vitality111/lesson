"use strict";

let numberOfFilms;
// Практика 3 function

function start() {
  numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  privat: false,
};

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр фильма под номером ${i}`
    );
  }
}

// Автоматизация с помошью цикла (добавлены функции!)
// первый способ цыкла!!!!!!!!!!!!!!!!!

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt("Один из понравившихся", ""),
      b = prompt("ocenka", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error!");
      i--;
    }
  }
}
rememberMyFilms();
writeYourGenres();
// Второй способ цыкла!!!!!!!!!!!!!!!!!!!!!!!!1
// let i = 0;
// while (i < 1) {
//   const a = prompt("Один из понравившихся", ""),
//   b = prompt("ocenka", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//         break;
//       } else {
//         console.log("error!");
//         i--;
//       }
//     }

//// Третий способ!!!!!!!!!!!!!!!!1
// let i = 0;
// do {
//   const a = prompt("Один из понравившихся", ""),
//     b = prompt("ocenka", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//     break;
//   } else {
//     console.log("error!");
//     i--;
//   }
// } while (i < 1);
function detectPersonalLvl() {
  if (personalMovieDB.count < 10) {
    console.log("Malo");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("norm");
  } else if (personalMovieDB.count >= 30) {
    console.log("nu=ihuia sebe");
  } else {
    console.log("eroree");
  }
}
detectPersonalLvl();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log("Private status off");
  }
}
showMyDB();
