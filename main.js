var blogs = [];

var blog1 = {
	title: "TIL that CSS is not my favorite...",
	date: "July 22, 2017",
	content: "When I first dipped my toes into HMTL and CSS I thought that CSS was the bomb.com, it was like magic! I've spent the last 3-4 days adding CSS to the homework and it makes me want to gouge my eyes out. And there's that."
};

var blog2 = {
	title: "The Beginning of the JavaScript Saga",
	date: "July 29, 2017",
	content: "So...this week we began our journey through the wonderful world of JavaScript. I'll be honest, I was super pumped to move out of CSS. I walked into class somewhat okay I had already been exposed to some JS, but boy did I go downhill quickly. Luckily, I left that first day of class not as confused as I was when I walked in. I found it very helpful to go back through the code after class/study group and read through it again. It seems to stick with me better. A lot of times I feel as though I'm not understanding why/how/what the code is doing, but when I explain it to a peer I get a teeny tiny boost of confidence because I'm actually able to explain it and it all makes sense. Looking forward to learning more, but not looking forward to all the hair that I'll probably pull out."
};

var blog3 = {
	title: "Then JavaScript Journey Continues",
	date: "August 7, 2017",
	content: "We have been working with functions the last week and a half or so, and my brain is, suprisingly, still intact. It's amazing how many different ways you can solve a problem! It's also amazing how many times I say to myself 'Holy cow, that makes sense...' when others are presenting their solutions. In short, I'm starting to wrap my head around what we're learning, but at the same time, my mind is being blown."
};

var blog4 = {
	title: "Blog 3",
	date: "Date",
	content: "Nizzle brizzle. Ghetto the bizzle. Maecenizzle nisl. Etiam that's the shizzle ante, fizzle quis, ullamcorpizzle ut, daahng dawg izzle, pimpin'. Morbi owned crunk. Break it down felizzle. Da bomb ghetto, nisl fo shizzle fringilla cursizzle, libero mi own yo' phat, sed laorizzle neque enim things shut the shizzle up. Shut the shizzle up crackalackin nibh go to hizzle fo shizzle."
};

var blog5 = {
	title: "August",
	date: "Date",
	content: "Lorizzle ipsizzle dolor sizzle amizzle, gangsta adipiscing elit. Crackalackin shizzlin dizzle sizzle, ghetto volutpizzle, suscipit sizzle, gravida vizzle, arcu. Own yo' check it out tortor. Sed funky fresh. Shizzle my nizzle crocodizzle at stuff dapibus turpis rizzle dope. Maurizzle pellentesque stuff izzle check it out. Gizzle izzle tortizzle. Pellentesque pizzle nisi. In we gonna chung yo dictumst."
};

var blog6 = {
	title: "August",
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


















