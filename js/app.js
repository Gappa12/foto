const nav = document.querySelector("nav"),
  hero = document.querySelector(".hero"),
  scroll = document.querySelector(".scroll"),
  options = {
    rootMargin: "-400px 0px 0px 0px",
  },
  observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        scroll.classList.add("hide");
      } else if (entry.isIntersecting) {
        nav.classList.remove("nav-scrolled");
      }
    });
  }, options);

observer.observe(hero);
