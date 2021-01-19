import '../scss/main.scss';



console.log('Hello, my name is Marcin. Nice to see you 🚀')

fetch("https://api.github.com/users/gorskimarcin8/repos?sort=created")
.then((res) => res.json())
.then((res) => {
    console.log(res);
    const container = document.querySelector('.projects__grid--js');
    for (let repo of res) {
        const {description, homepage, html_url, name} = repo;
        const template = `   <article class="project">
        <div class="project__window">
          <span class="project__window--dot"></span>
          <span class="project__window--dot"></span>
          <span class="project__window--dot"></span>
        </div>
        <div class="project__container">
          <img class="project__icon" src="../assets/img/github-icon.png" alt="">
          <h3 class="project__title project__grid">
            <span class="project__label">project:</span><span class="project__name">${name}</span>
          </h3>
          <p class="project__description project__grid">
            <span class="project__label">description:</span
            ><span class="project__info">${description}</span>
          </p>
          <p class = "project__grid">
            <span class="project__label">demo:</span
            ><a class="project__link" href="${homepage}" title="podlaski git demo"> &lt;see here&gt;</a>
          </p>
          <p class = "project__grid">
            <span class="project__label">github:</span>
            <a class="project__link" href="${html_url}" title="podlaski git kod źródłowy">
              &lt;source code&gt;</a>
          </p>
          </div>
        </article>`

        container.innerHTML += template;

    }
 })
.catch((e)=> console.log(e));