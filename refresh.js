function refresh() {
  console.info("Refreshing AWS Console")
  document.querySelectorAll("button[title=Refresh]").forEach(item => {
    item.click()
  })
}

console.log("Initiating aws console refresh interval")
setInterval(refresh, 15 * 1000)
