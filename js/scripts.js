(() => {
  const body = document.body;
  const themeChooser = document.querySelector('.themes');

  function setTheme(theme) {
    body.classList = ""
    body.classList.add(theme);
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

    switch (theme) {
      case "cotton-candy":
        metaThemeColor.setAttribute("content", '#00dbde');
        break;
      case "sunset":
        metaThemeColor.setAttribute("content", '#FF1361');
        break;
      case "mist":
        metaThemeColor.setAttribute("content", '#35eb93');
        break;
      default:
        metaThemeColor.setAttribute("content", '#cc208e');
    }
    return false;
  }

  function handleClick(e) {
    if (e.target.matches('a')) {
      setTheme(e.target.dataset.theme);
      themeChooser.querySelectorAll('a').forEach(el => el.classList.remove('is-selected'));
      e.target.classList.add('is-selected');
    }
  }

  themeChooser.addEventListener('click', handleClick);
})();
