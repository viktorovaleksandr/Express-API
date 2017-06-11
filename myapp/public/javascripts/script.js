$(function() {
	$('#factorial').submit(function(event) {
		event.preventDefault();
		var data = {
			number: $('#number').val()
		}
		$.post('form', data, function(data) {
			$('#number-res').text(data.number);
			$('.factorial-res').show(1000);
		});
	});
});



