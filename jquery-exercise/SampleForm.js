var myForm = new SampleForm(){	
};

var setFullName = function(){
	$('input[name="fullname"]').val('Jhasmany');	
};

var setEmail = function(){
	$('input[name="email"]').val('Jhasmany@fundacion-jala.org');	
};

var selectedGender = function(){
	$('input#genderM').attr('checked', true);// seleccionando el radio button gender
};

var selectedHobbies = function(){
	$('input#hobby1').attr('checked', true);// seleccionando el radio button hobbies
	$('input#hobby5').attr('checked', true);// seleccionando el radio button hobbies
};

var selectedHeard = function(){
	$('select#heard').val('net'); //eligiendo heard about us via
};

var setMessage = function(){
	$('textarea#message').val('We are give a tes about JavaScript
		with the next topics: Principles Basic of GIT, write a test
		with Jasmine and manipulate DOM with JQuery'); //Escribiendo en el message
};

var validateButton = function(){
	$('span.btn.btn-default').click(function() {
  		var htmlString = $( this ).html();
  		$( this ).text( htmlString );
	});
};