(() => {
  document.documentElement.addEventListener("click", (e) => {
    console.log("hi");
    document.body.webkitRequestFullscreen()
  })


})()
