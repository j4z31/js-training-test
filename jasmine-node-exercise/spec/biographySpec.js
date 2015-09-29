var Biography = require('.././biography.js');

describe('Biography', function(){
	var biography;

	beforeEach(function(){
		biography = new Biography();
	});

	describe('Information about people should be correctly', function(){

		it('Should throw error when write name and age undefinied', function(){			

			expect(function(){
				biography.NameAgeCorrect(undefined, undefined);
			}).toThrow('Need name and age to provide a biography');
		});

		it('Should throw error when write age is Invalid', function(){			

			expect(function(){
				biography.AgeCorrect('Holaaaa');
			}).toThrow('Invalid age.');
		});

		it('Should throw error when write age is Invalid', function(){			
			var actRes = 'Hi, my name is Jhasmany i am 23 years old and i am a nice guy.';
			var expRes = biography.GetInfo('Jhasmany', 23);

			expect(actRes).toEqual(expRes);			
		});		
	});
});