/*var GetBio = function(name, age){
	if (name === undefined || age === undefined)
		throw 'Need name and age to provide a biography';
	
	if (typeof(age) != 'number' || age < 0)
		throw 'Invalid age.'

	return 'Hi, my name is ' + name + ' i am ' + age + ' years old and i am a nice guy.';	
};*/

var Biography = function(){
};

Biography.prototype.NameAgeCorrect = function(name, age){
	if (name === undefined || age === undefined){
		throw 'Need name and age to provide a biography';
	};
};

Biography.prototype.AgeCorrect = function(age){
	if (typeof(age) != 'number' || age < 0) {
		throw 'Invalid age.'
	};
};

Biography.prototype.GetInfo = function(name, age){
	return 'Hi, my name is ' + name + ' i am ' + age + ' years old and i am a nice guy.';
};

module.exports = Biography;