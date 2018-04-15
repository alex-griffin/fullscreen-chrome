(() => {

  const isMathExpression = (str) => {
    try {
      let result = math.eval(str)
      return math.format(result, 6)
    } catch {
      return false
    }
  }

  const searchbar = document.getElementById("searchbar")
  searchbar.addEventListener("keydown", (e) => {
    const value = e.target.value
    if (event.keyCode == 13 || event.which == 13) {
      if(value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) {
        window.location.href =  "https://www." + value
      } else {
        window.location.href = 'http://www.google.com/search?q=' + encodeURIComponent(value)
      }
    }
  })

  searchbar.addEventListener("keyup", (e) => {
    const value = e.target.value
    const output = document.getElementById("output")
    let result = isMathExpression(value)
    console.log(result);
    if((typeof result === "number" || typeof result === "string") && (result != "undefined" && result != "function") ) {
      output.innerHTML = result
    } else {
      output.innerHTML = "&#8194;"
    }
    // if(output.innerHTML == "") }

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
