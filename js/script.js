var body = document.body
var btnFilterOpen = document.querySelector('header > nav > ul > li > .zoeken')
var btnFilterClose = document.querySelector('header > nav > ul > .zoek >  button')

btnFilterOpen.addEventListener('click', openFilter)
btnFilterClose.addEventListener('click', closeFilter)

function openFilter() {
  body.classList.add('filter')
}

function closeFilter(e) {
  e.preventDefault()
  body.classList.remove('filter')
}
