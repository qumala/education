var Course = new Object();

Course.NONE		= 0;
Course.LECTURE 	= 1;
Course.SEMINAR	= 2;
Course.ASSIGN	= 3;
Course.LABWORK	= 4;
Course.TEST		= 5;
Course.EXAM		= 6;
Course.GYM		= 7;

Course.PAIR1 = 9*60 	+ 0;
Course.PAIR2 = 10*60 	+ 45;
Course.PAIR3 = 12*60 	+ 30;
Course.PAIR4 = 14*60 	+ 15;
Course.PAIR5 = 16*60 	+ 0;
Course.PAIR6 = 17*60 	+ 45;

Course.ONE_PAIR 	= 95;
Course.TWO_PAIRS 	= 200;
Course.HALF_PAIR 	= 45;

Course.create = function (begin, length, type, subject, auditory, teacher) {

	var obj = new Object();
	
	obj.div = document.createElement('div');
	obj.div.className = 'course';

	obj.div.innerHTML += "<b>" + subject.name + "</b>";
	if( auditory != undefined && auditory != Location.UNDEFINED) {
		obj.div.innerHTML += "<br>" + auditory.name;
	}
	if( teacher != undefined) {
		obj.div.innerHTML += "<br>" + teacher.name;
	}
	
	obj.getHTMLElement = function () {
		return this.div;
	}
	
	obj.begin = begin;
	obj.length = length;
	
	obj.setPosition = function (zero, ppm) {
		obj.div.style.top = ppm*(zero + obj.begin) + 'px';
		obj.div.style.height = ppm*obj.length + 'px';
	}
	
	obj.setColor = function ( red, green, blue, alpha) {
		obj.div.style.background = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
		obj.div.style.background = 
			'linear-gradient(to bottom,' + 
			'rgba(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ',' + alpha + '),' + 
			'rgba(' + Math.round(0.75*red) + ',' + Math.round(0.75*green) + ',' + Math.round(0.75*blue) + ',' + alpha + '))';
	}
	
	switch(type) {
		case Course.NONE:
			obj.setColor(127,127,127,1);
		break;
		case Course.LECTURE:
			obj.setColor(255,0,0,1);
		break;
		case Course.SEMINAR:
			obj.setColor(0,255,0,1);
		break;
		case Course.ASSIGN:
			obj.setColor(0,0,255,1);
		break;
		case Course.LABWORK:
			obj.setColor(255,255,0,1);
		break;
		case Course.TEST:
			obj.setColor(255,0,255,1);
		break;
		case Course.EXAM:
			obj.setColor(0,255,255,1);
		break;
		case Course.GYM:
			obj.setColor(255,255,255,1);
		break;
	}
	
	return obj;
}