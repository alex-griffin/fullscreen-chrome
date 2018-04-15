(() => {
  const searchbar = document.getElementById("searchbar")
  document.getElementById("searchbar").addEventListener("keydown", () => {
    if (event.keyCode == 13 || event.which == 13) {
      const value = e.target.value
      if(value.match(^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$) {
        location = value
      } else {
        location = 'http://www.google.com/search?q=' + encodeURIComponent(value)
      }
    }
  })

  searchbar.autofocus = true

  const getTime = () => {
    const dateContainer = document.getElementById("date-container")
    const date = new Date()
    let h = date.getHours()
    h -= (h > 12 ? 12 : 0)
    const m = date.getMinutes().toString().padStart(2, "0")
    dateContainer.innerHTML = h + ":" + m
    setTimeout(getTime, 500);
  }

  getTime()
})()
