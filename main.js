function domString(blogs){
	var blogString = "";
	for(var i = 0; i < blogs.length; i ++){
		blogString += `<section class="blog-card col-xs-4 panel panel-success">
											<div class='card-title panel-heading'>${blogs[i].title}</div>
											<div class='card-date panel-body'><h6>${blogs[i].date}</h6></div>
											<div class='card-content panel-body'><p>${blogs[i].content}</p></div>
										</section>`;
	writeToDom(blogString);
	}
}; 

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

var blogsRequest = new XMLHttpRequest;
blogsRequest.addEventListener("load", loadBlogs);
blogsRequest.addEventListener("error", error);
blogsRequest.open("GET", "blog.json");
blogsRequest.send();
















