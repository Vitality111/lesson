"use strict";

// Практика 4

const personalMovieDB = {
  count: 0,
  movies: {},
  actor: {},
  genres: [],
  privat: true,
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let gener = prompt(`Ваш любимый жанр фильма под номером ${i}`);
      if (gener === "" || gener == null) {
        console.log("Вы ввели некоректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = gener;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    });
  },
  rememberMyFilms: function () {
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
  },
  start: function () {
    personalMovieDB.count = +prompt("Скольк фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Скольк фильмов вы уже посмотрели?", "");
    }
  },
  detectPersonalLvl: function () {
    if (personalMovieDB.count < 10) {
      console.log("Malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("norm");
    } else if (personalMovieDB.count >= 30) {
      console.log("nihuia sebe");
    } else {
      console.log("eroree");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("Private status off");
    }
  },
  toggleVisibleMyDB: function (callback) {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
    callback(personalMovieDB.showMyDB());
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLvl();
personalMovieDB.toggleVisibleMyDB();
