$(document).ready(function() {

	var courses = [1,3,4];

	// courses (button type) append variable
	var append_text_1 = '<td class="align-middle"><div class="items-collection"><div class="items"><div data-toggle="buttons" class="btn-group"><label class="btn btn-default btn-new"><div class="itemcontent"><h5>';
	var append_text_2 = '<input type="checkbox" class="custom-control-input"name="var_id[]" autocomplete="off" value=""></h5></div></label></div> </div></div></td>'

	// courses (display type) append variable
	var append_disp_1 = '<td class="align-middle"><div class="items-collection"><div class="items"><div class="itemcontent"><h5 class="mt-2">';
	var append_disp_2 = '</h5></div></div></div></td>'


	// time append variable
	var append_time_1 = '<th scope="row" class="align-middle">';
	var append_time_2 = '</th>';

	// break variable 
	var break_1 = '<tr><th scope="row" class="align-middle">';
	var break_2 = '</th><td class="align-middle" colspan="5">Break</td></tr>';

	// lunch break variable 
	var break_lunch_1 = '<tr><th scope="row" class="align-middle">';
	var break_lunch_2 = '</th><td class="align-middle" colspan="5">Lunch Break</td></tr>';
                                         

	// chooseable courses
	// the courses_c's index matches with the courses array's index (the input array)
	var courses_c = ["AE","RE", "Physics", "Chemistry", "Biology", "Psychology"];
	var courses_choosen = [courses_c[courses[0]], courses_c[courses[1]], courses_c[courses[2]]];
	console.log(courses_choosen);	

	// append process
	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "8:00 - 8:40" + append_time_2);	
	$("tbody").append(append_disp_1 + "ADAS" + append_disp_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "8:45 - 9:25" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "9:30 - 10:10" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	


	$("tbody").append(break_1 + "9:30 - 10:10" + break_2);	


	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "10:20 - 11:00" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "11:05 - 11:45" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append(break_lunch_1 + "11:45 - 12:45" + break_lunch_2);	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "12:45 - 1:25" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "1:30 - 2:10" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "2:15 - 2:55" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$("tbody").append('<tr>');	
	$("tbody").append(append_time_1 + "3:00 - 3:40" + append_time_2);	
	$("tbody").append(append_text_1 + "ADAS" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[0] + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[1] + append_text_2);
	$("tbody").append(append_text_1 + "PE" + append_text_2);
	$("tbody").append(append_text_1 + courses_choosen[2] + append_text_2);
	$("tbody").append('</tr>');	

	$(function () {
		$('#search').on('keyup', function () {
			var pattern = $(this).val();
			$('.items-collection .items').hide();
			$('.items-collection .items').filter(function () {
				return $(this).text().match(new RegExp(pattern, 'i'));
				}).show();
		});
	});

});


