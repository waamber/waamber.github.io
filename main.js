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
	title: "The JavaScript Journey Continues",
	date: "August 7, 2017",
	content: "We have been working with functions the last week and a half or so, and my brain is, suprisingly, still intact. It's amazing how many different ways you can solve a problem! It's also amazing how many times I say to myself 'Holy cow, that makes sense...' when others are presenting their solutions. In short, I'm starting to wrap my head around what we're learning, but at the same time, my mind is being blown."
};

var blog4 = {
	title: "First Group Project",
	date: "August 12, 2017",
	content: "We finished our first group project this past week, and it went waaaaay better than expected. We didn't have as many merge conflicts, and when we did, they weren't as terrifying as I thought it would be. Definitely looking forward to more!"
};

var blog5 = {
	title: "EVENT LISTENERS",
	date: "August 19, 2017",
	content: "So I definitely struggled with event listeners in the beginning. I was working on my Dynamic Cards project and I couldn't figure out how to get the click event to work. I had all the functions ready to go, but I sat there for HOURS trying to figure out why the click event wasn't firing off my code. A friend of mine came over to me to find out why I looked so confused and they looked at me and told me to stare REEEEAAALLLLY hard at the event listener. At that moment it immediately clicked (no pun intended), I wasn't calling the functions in the click event..DUH. But it's clicked ever since. Also, I didn't end up jumping out of a window that day."
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


















