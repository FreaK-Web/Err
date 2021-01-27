const NumOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

const PerMovie = {
    count : NumOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
const a = prompt('Один из посл просмотренных фильмов ?',"" ),
      b = prompt('На сколько оцените его?', ""), 
      c = prompt('Один из посл просмотренных фильмов ?',"" ),
      d = prompt('На сколько оцените его?', "");

 PerMovie.movies[a]= b;
 PerMovie.movies[c]= d;


console.log(PerMovie)