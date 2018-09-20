

var kickstarter = {
	name: 'Praey for the Gods',
	description: 'In Prey for the Gods, you play a lone hero sent to the edge of a dying world to discover the mystery behind a never-ending winter. Arriving with only the clothes on your back, you must survive the colossal dangers that you encounter. To restore balance and reclaim the land from the brink, you will be faced with questions that not even a God knows the answer to.',

	img: 'gaming img',
	link :'https://www.kickstarter.com/projects/802508750/prey-for-the-gods/posts/1635921',

	pledged: 501252,
	backers: 14738,

	//timer 
	timeLeft: function(){
		var seconds= 1000,
			minute = seconds *60,
			hour = minute * 60,
			day = hour *24;

			var timer;

			var end = new Date('10/28/18 2:00 PM');
			var now = new Date();

			var distance = end - now;

			var days = Math.floor(distance/day),
				hours = Math.floor((distance % day)/hour),
				minutes = Math.floor((distance % hour)/minute),
				seconds = Math.floor((distance % minute)/second)

			return[days,hours,minutes,seonds];
			
			
	},


	pledgeLevels:[{
		name:'Initiate',
		price: 5,
		includes:['Digitial wall paper']
	},
	{
		name:'Backer',
		price:15,
		includes:['PC digitial Copy']
},
{
		name:'Backer Plus',
		price: 25,
		includes: ['Any version of the Digitial Copy ',' Grappling Hook DLC',' Digitial Wall Paper']
},
{
		name:'Double Backer',
		price: 30,
		includes: ['2 Backer copies','1 gift Digitial Copy for friend']

},
{
		name:'Legion Edition',
		price: 50,
		includes:['Backer Deluxe Bundle','Elite Avatar Skin','Closed Beta access']
}		
	]

}

var link = document.getElementById('link');



link.textContent ='Click here';
link.href = kickstarter.link

var xx = document.getElementById('text');

//name of the kickstarter campagin and pledges as well
var praey = document.getElementById('name');
	praey.textContent = kickstarter.name;

var pledger = document.getElementById('pledged');
	pledger.textContent = 'Pledgers: '+kickstarter.pledged;

var backer = document.getElementById('backs');
	backer.textContent = 'Backers: '+kickstarter.backers;

var info = document.getElementById('desc');
	info.textContent = kickstarter.description;
	
var five = document.getElementById('initiate');
	five.textContent ="Level: " + kickstarter.pledgeLevels[0].name;
	
var fiveprice = document.getElementById('initiateprice');
	fiveprice.textContent = "Donation Price: $" + kickstarter.pledgeLevels[0].price;
	
var fiveinc = document.getElementById('initiate includes');	
	fiveinc.textContent = "Includes: " +kickstarter.pledgeLevels[0].includes;


var onefive = document.getElementById('backer1');
	onefive.textContent = "Level: " + kickstarter.pledgeLevels[1].name;

var	onefiveprice = document.getElementById('backer1price');
	onefiveprice.textContent = "Donation Price: $" + kickstarter.pledgeLevels[1].price;

var	onefivebundle = document.getElementById('backer1includes');
	onefivebundle.textContent = "Includes: " + kickstarter.pledgeLevels[1].includes;	
	
	
var twofive = document.getElementById('backer2'),
	twofiveprice = document.getElementById('backer2price'),
	twofivebundle = document.getElementById('backer2includes');

	twofive.textContent = "Level: " + kickstarter.pledgeLevels[2].name;
	twofiveprice.textContent = "Donation Price: $" + kickstarter.pledgeLevels[2].price;
	twofivebundle.textContent = "Includes: " + kickstarter.pledgeLevels[2].includes;	

var threefive = document.getElementById('backer3'),
	threefiveprice = document.getElementById('backer3price'),
	threefivebundle = document.getElementById('backer3includes');

threefive.textContent = "Level: " + kickstarter.pledgeLevels[3].name;
threefiveprice.textContent = "Donation Price: $" + kickstarter.pledgeLevels[3].price;
threefivebundle.textContent = "Includes: " + kickstarter.pledgeLevels[3].includes;	