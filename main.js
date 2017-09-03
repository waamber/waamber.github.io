const blogContainer = document.getElementById("blog-container");
let selectedCard;
const jumboCardContainer = document.getElementById("jumboCard");

const domString = (blogs) => {
	let blogString = "";
	for(let i = 0; i < blogs.length; i ++){
		blogString += `<section class="blog-card col-xs-4" id="blogcard">
											<div class='card-title child'>${blogs[i].title}</div>
											<div class='card-date child'><h6>${blogs[i].date}</h6></div>
											<div class='card-content child'><p>${blogs[i].content}</p></div>
										</section>`;
	writeToDom(blogString);
	}
};

blogContainer.addEventListener("click", (event) => {
  if(event.target.classList.contains("child")){
    selectedCard = event.target.parentNode;
  }else if(event.target.parentNode.parentNode.classList.contains("blog-card")){
    selectedCard = event.target.parentNode.parentNode;
  }else if(event.target.classList.contains("blog-card")){
    selectedCard = event.target;
  }
  	jumboCardContainer.classList.remove("hidden");
  	jumboCardContainer.innerHTML = selectedCard.innerHTML;
});

jumboCardContainer.addEventListener("click", () => {
	jumboCardContainer.classList.add("hidden");
});

const writeToDom = (strang) => {
	var blogContainer = document.getElementById("blog-container");
	blogContainer.innerHTML = strang; 
};

const loadBlogs = (event) => {
	data = JSON.parse(event.target.responseText); 
	domString(data.blogs);
};

const error = () => {
	console.log("AHHHH!");
};

const blogsRequest = new XMLHttpRequest();
blogsRequest.addEventListener("load", loadBlogs);
blogsRequest.addEventListener("error", error);
blogsRequest.open("GET", "blog.json");
blogsRequest.send();
















