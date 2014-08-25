var Day = new Object;

Day.TOP_HEADER = 28;
Day.TOP_PADDING = 12;
Day.BOTTOM_PADDING = 8;

Day.create = function (day, name) {
	var obj = new Object();
	
	obj.div = document.createElement("div");
	obj.div.className = "day";
	
	obj.day = day;
	
	obj.divHeader = document.createElement("div");
	obj.divHeader.className = "dayHeader";
	obj.divHeader.innerHTML = name;
	obj.divHeader.style.height = Day.TOP_HEADER + 'px';
	obj.divHeader.style.marginBottom = Day.TOP_PADDING + 'px';
	obj.div.appendChild(obj.divHeader);
	
	obj.getHTMLElement = function () {
		return obj.div;
	}
	
	obj.getLength = function () {
		return this.div.offsetHeight;
	}
	
	obj.list = new Array();
	obj.addCourse = function ( course ) {
	
		if(this.list.length == 0) {
			obj.begin = course.begin;
		}
		obj.length = course.begin + course.length - obj.begin;
		
		this.list.push(course);
		this.div.appendChild(course.getHTMLElement());
		
	}
	
	obj.resize = function (days) {
		this.div.style.width = 100/days + '%';
	}
	
	obj.normalize = function (begin, ppm) {
		var zero = -begin;
		for(var i = 0; i < this.list.length; i++) {
			this.list[i].setPosition(zero,ppm);
			zero -= this.list[i].length;
		}
	}
	
	return obj;
}