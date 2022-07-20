const body = document.body,
  darkModeToggle = document.getElementById("dark-mode-toggle"),
  darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
localStorage.getItem("colorscheme")
  ? setTheme(localStorage.getItem("colorscheme"))
  : body.classList.contains("colorscheme-light") ||
    body.classList.contains("colorscheme-dark")
  ? setTheme(body.classList.contains("colorscheme-dark") ? "dark" : "light")
  : setTheme(darkModeMediaQuery.matches ? "dark" : "light"),
  darkModeToggle.addEventListener("click", () => {
    setTheme(body.classList.contains("colorscheme-dark") ? "light" : "dark");
  }),
  darkModeMediaQuery.addListener((a) => {
    setTheme(a.matches ? "dark" : "light");
  });
function setTheme(a) {
  body.classList.remove("colorscheme-auto"),
    (inverse = a === "dark" ? "light" : "dark"),
    localStorage.setItem("colorscheme", a),
    body.classList.remove("colorscheme-" + inverse),
    body.classList.add("colorscheme-" + a);
}
