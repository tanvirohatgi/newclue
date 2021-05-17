(function($) {
    "use strict"; 
	// js to load past-courses
	past_courses.forEach(function(course){
		var course_html = `
			<!-- Card -->
			<div class="card" id=${course.id}>
			    <ul class="list-unstyled">
			        <li class="media">
			            <span class="fa-stack">
			                <span class="fas fa-circle fa-stack-2x"></span>
			                <span class="fa-stack-1x">${course.id}</span>
			            </span>
			            <div class="media-body">
			                <h5>${course.title}</h5>
			                <p>${course.description}</p>
			            </div>
			        </li>
			    </ul>
			</div> <!-- end of card -->
			<!-- end of card -->
		`
		$('#past-courses').append(course_html);
	})
})(jQuery);