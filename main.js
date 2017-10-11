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
	if ($(event.target).hasClass('blog-card')) {
		$('#jumboCard').removeClass('hidden');
		$('#jumboCard').html(event.target.innerHTML);
	} else {
		const blogCard = $(event.target).parents('.blog-card')[0];
		$('#jumboCard').removeClass('hidden');
		$('#jumboCard').html(blogCard.innerHTML);
	};
	$('html, body').animate({ scrollTop: 0 }, 'fast');
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
















