//zoek functie

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

//like knoppen
var clicks = 0;


    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };


//reactie plaatsen https://codepen.io/AyrtonTwigg/pen/gXagRo?q=post%20a%20comment&order=popularity&depth=everything&show_forks=false
var button = document.getElementById("postbtn");
var commentBoxContent = document.getElementById("commentBox");

button.addEventListener("click", postComment);

commentBoxContent.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) //enter knop
    postComment();
})

function postComment() {
  var para = document.createElement("p");
  var node = document.createTextNode(commentBoxContent.value);
  para.appendChild(node);
  var element = document.getElementById("Comment Posts");
  element.appendChild(para);
  commentBoxContent.value = '';
}


//verplaatsen
function MoveDiv() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('source'));
    document.getElementById('destination').appendChild(fragment);
}
