
$(document).ready(function() {

	$('#pincode-input1').pincodeInput({inputs:6,hidedigits:false});

	// var courses = [physics, chemistry, latin, stats, adas, colloquy];

	$("button").click(function() {

		var isSelected = [$("#customCheck1").prop("checked"),$("#customCheck2").prop("checked"),$("#customCheck3").prop("checked"),$("#customCheck4").prop("checked")
		,$("#customCheck5").prop("checked"),$("#customCheck6").prop("checked")];
		// console.log(isSelected);
		i = 0;
		record = [];
		while (i < 7) {
			if (isSelected[i]==true) {
				record.push(i);
				console.log(record);
				i++;
			}
			else i++;
		} 

	});

	

});


