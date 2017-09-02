// var blogcard = document.getElementById("blogcard");

// blogcard.addEventListener("click", function(event){
// 	console.log(event);
// });
var blogContainer = document.getElementById("blog-container");
var selectedCard;

function domString(blogs){
	var blogString = "";
	for(var i = 0; i < blogs.length; i ++){
		blogString += `<section class="blog-card child col-xs-4" id="blogcard">
											<div class='card-title child'>${blogs[i].title}</div>
											<div class='card-date child'><h6>${blogs[i].date}</h6></div>
											<div class='card-content child'><p>${blogs[i].content}</p></div>
										</section>`;
	writeToDom(blogString);
	}
};

blogContainer.addEventListener("click", function(event){
  if(event.target.classList.contains("child")){
    selectedCard = event.target.parentNode;
  }else if(event.target.parentNode.parentNode.classList.contains("blog-card")){
    selectedCard = event.target.parentNode.parentNode;
  }else if(event.target.classList.contains("blog-card")){
    selectedCard = event.target;
  }
    addModal();
    console.log(selectedCard);
});

//possible jumbotron with hidden class "display: none";

function addModal(){
	selectedCard.classList.remove("col-xs-4");
	selectedCard.classList.add("modal-content", "stretch");
	selectedCard.classList.add("col-xs-12");

	var modalBtn = document.createElement("button");
	selectedCard.appendChild(modalBtn);
	var modalTxt = document.createTextNode("CLOSE");
	modalBtn.appendChild(modalTxt);

modalBtn.addEventListener("click", function(){
			selectedCard.classList.remove("col-xs-12", "modal-content", "stretch");
			selectedCard.classList.add("col-xs-4");
	})
}



function writeToDom(strang){
	var blogContainer = document.getElementById("blog-container");
	blogContainer.innerHTML = strang; 
};

function loadBlogs(){
	var data = JSON.parse(this.responseText); 
	domString(data.blogs);
};

function error() {
	console.log("AHHHH!");
};

var inputField = document.getElementById("search");

inputField.addEventListener("keypress", function(event) {
		var txt = inputField.value;
		var result = blogs.filter(function(blogs) {
			return blogs.content.indexOf(txt)>-1;
		})
		domString(result);
});

var blogsRequest = new XMLHttpRequest;
blogsRequest.addEventListener("load", loadBlogs);
blogsRequest.addEventListener("error", error);
blogsRequest.open("GET", "blog.json");
blogsRequest.send();
















