import '../scss/main.scss';



console.log('HELLO 🚀')

fetch("https://api.github.com/users/gorskimarcin8/repos?sort=created")
.then((res) => res.json())
.then((res) => {console.log(res) })
.catch((e)=> console.log(e));