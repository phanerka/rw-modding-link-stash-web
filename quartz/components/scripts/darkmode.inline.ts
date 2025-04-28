const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)

  document.addEventListener("readystatechange", () => {
    if (currentTheme === "light" || currentTheme === "dark") setImageSource(currentTheme)
  });

function setImageSource(theme: "light" | "dark") {
  document.readyState
  var isDarkTheme = (theme == "dark") ? true : false;

  var dark: NodeList = document.querySelectorAll('.dark-img');
    var light: NodeList = document.querySelectorAll('.light-img');
    console.log(dark);
    for (var i = 0; i < dark.length; i++){
      var d = dark[i] as HTMLElement
      d.setAttribute("media", isDarkTheme ? "all" : "none")
    }
    for (var i = 0; i < dark.length; i++){
      var l = light[i] as HTMLElement
      l.setAttribute("media", isDarkTheme ? "none" : "all")
    }
}


const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
    console.log("switchTheme")
    setImageSource(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
    console.log("themeChange")
    //setImageSource(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
