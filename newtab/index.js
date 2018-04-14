(() => {
  const searchbar = document.getElementById("searchbar")
  document.getElementById("searchbar").addEventListener("keydown", () => {
    if (event.keyCode == 13 || event.which == 13) {
      location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('searchbar').value)
    }
  })

  searchbar.autofocus = true

  const getTime = () => {
    const dateContainer = document.getElementById("date-container")
    const date = new Date()
    let h = date.getHours()
    h -= (h > 12 ? h - 10 : 0)
    const m = date.getMinutes()
    dateContainer.innerHTML = h + ":" + m
    setTimeout(getTime, 500);
  }

  getTime()
})()
