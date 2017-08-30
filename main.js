var blogContainer = document.getElementById("blog-container");

for (var i = 0; i < blogs.length; i++) {
	var currentBlog = blogs[i];
	var blogString = "";

	blogString +=	"<section class='blog-card'>";
	blogString +=		"<div class='card-title'>";
	blogString +=			"<h4>" + currentBlog.title + "</h4>";
	blogString +=		"</div>";
	blogString +=		"<div class='card-date'>";
	blogString +=			"<h6>" + currentBlog.date + "</h6>";
	blogString +=		"</div>";
	blogString +=		"<div class='card-content'>";
	blogString +=			"<p>" + currentBlog.content + "</p>";
	blogString +=		"</div>";
	blogString +=	"</section>";

	blogContainer.innerHTML += blogString;
}


















