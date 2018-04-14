(() => {
  const searchbar = document.getElementById("searchbar")
  document.getElementById("searchbar").addEventListener("keydown", () => {
    if (event.keyCode == 13 || event.which == 13) {
      location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('searchbar').value)
    }
  })

  searchbar.autofocus = true
})()
