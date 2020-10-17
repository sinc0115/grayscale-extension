ext = false

// ADDFILTER()
function addFilter () {
  if (ext == false) {
    document.body.style.filter = 'grayscale(100%)'
    ext = true
  } else {
    document.body.style.filter = 'none'
    ext = false
  }
}

// ENABLE FILTER
browser.runtime.onConnect.addListener(addFilter)

// browser.runtime.onConnect.addListener(function () {
//   document.body.style.filter = 'grayscale(100%)'
// })
