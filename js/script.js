const nn = prompt ('Как вас зовут?', ""),
      first = prompt (`Любой жанр выберите ${nn}`, "") ,
      second = prompt (`Еще жанр выберите ${nn} пожалуйсто`, "");

const profile = {
    name : nn,
    prof : {},
    genres : []
};


const login = prompt (`Придумайте логин ${nn}`, ""),
      pass = prompt ('Придумайте пароль', "");  

profile.prof[login] = pass;
profile.genres[] = first;
profile.genres[] = second;

console.log(profile);