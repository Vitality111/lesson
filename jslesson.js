"use strict";

const numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  privat: false,
};


// Автоматизация с помошью цикла

// первый способ цыкла!!!!!!!!!!!!!!!!!
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

// if (personalMovieDB.count < 10) {
//   console.log("Malo");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("norm");
// } else if (personalMovieDB.count >= 30) {
//   console.log("nu=ihuia sebe");
// } else {
//   console.log("eroree");
// }

console.log(personalMovieDB);