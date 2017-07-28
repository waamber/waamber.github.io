var blogs = [];

var blog1 = {
	title: "TIL that CSS is not my favorite...",
	date: "July 22, 2017",
	content: "When I first dipped my toes into HMTL and CSS I thought that CSS was the bomb.com, it was like magic! I've spent the last 3-4 days adding CSS to the homework and it makes me want to gouge my eyes out. And there's that."
};

var blog2 = {
	title: "Blog 2",
	date: "Date",
	content: "Lorem ipsum owned sizzle gangster, adipiscing mah nizzle. Nullam sapien velizzle, away da bomb, fo shizzle quizzle, gravida vel, shizznit. Pellentesque eget dang. Sizzle erizzle. Fusce gangster dolizzle dapibus turpis tempizzle break yo neck, yall. Maurizzle pellentesque fo shizzle mah nizzle fo rizzle, mah home g-dizzle izzle turpizzle. Rizzle in tortizzle. Pellentesque shiz rhoncizzle bling bling."
};

var blog3 = {
	title: "Blog 3",
	date: "Date",
	content: "Nizzle brizzle. Ghetto the bizzle. Maecenizzle nisl. Etiam that's the shizzle ante, fizzle quis, ullamcorpizzle ut, daahng dawg izzle, pimpin'. Morbi owned crunk. Break it down felizzle. Da bomb ghetto, nisl fo shizzle fringilla cursizzle, libero mi own yo' phat, sed laorizzle neque enim things shut the shizzle up. Shut the shizzle up crackalackin nibh go to hizzle fo shizzle."
};

var blog4 = {
	title: "Blog 4",
	date: "Date",
	content: "Lorizzle ipsizzle dolor sizzle amizzle, gangsta adipiscing elit. Crackalackin shizzlin dizzle sizzle, ghetto volutpizzle, suscipit sizzle, gravida vizzle, arcu. Own yo' check it out tortor. Sed funky fresh. Shizzle my nizzle crocodizzle at stuff dapibus turpis rizzle dope. Maurizzle pellentesque stuff izzle check it out. Gizzle izzle tortizzle. Pellentesque pizzle nisi. In we gonna chung yo dictumst."
};

var blog5 = {
	title: "Blog 5",
	date: "Date",
	content: "Cras get down get down pede izzle yo mamma. Fo sociis natoque shizzle my nizzle crocodizzle funky fresh the bizzle dizzle rizzle montizzle, nascetizzle owned dope. Ut shut the shizzle up dizzle, i'm in the shizzle quizzle, crunk izzle, hizzle egizzle, urna. Mauris pimpin' urna commodo libero. Donec sagittizzle. Nullam augue black, fringilla a, aliquam yo mamma, condimentum at, ipsizzle. "
};

blogs.push(blog1);
blogs.push(blog2);
blogs.push(blog3);
blogs.push(blog4);
blogs.push(blog5);

var blogContainer = document.getElementById("blog-container");
var currentBlog = blogs[i];

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


















