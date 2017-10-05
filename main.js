let selectedCard;

const domString = (blogs) => {
	let blogString = "";
	for (let i = 0; i < blogs.length; i++) {
		blogString += `<section class="blog-card col-xs-4" id="blogcard">
											<div class='card-title child'>${blogs[i].title}</div>
											<div class='card-date child'><h6>${blogs[i].date}</h6></div>
											<div class='card-content child'><p>${blogs[i].content}</p></div>
										</section>`;
		writeToDom(blogString);
	}
};

$('#blog-container').click((event) => {
	if ($(event.target).hasClass('child')) {
		selectedCard = $(event.target).parent();
	} else if ($(event.target).parent().parent().hasClass('blog-card')) {
		selectedCard = $(event.target).parent().parent();
	} else if ($(event.target).hasClass('blog-card')) {
		selectedCard = $(event.target);
	}
	$('#jumboCard').removeClass('hidden');
	$('#jumboCard').html(event.target.innerHTML);
});

$('#jumboCard').click(() => {
	$('#jumboCard').addClass('hidden');
});

const writeToDom = (blogString) => {
	$('#blog-container').html(blogString);
};

$.get('blog.json').done((data) => {
	blogs = data.blogs;
	domString(blogs);
}).fail((error) => {
	console.log(error);
});
















