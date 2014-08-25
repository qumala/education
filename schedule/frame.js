var frame = new Object();

frame.resize = function () {
	this.div.style.height = document.documentElement.clientHeight + 'px';
	
	this.length = 0;
	for(var i=0;i<this.list.length;i++) {
		if(this.list[i].getLength() > this.length) {
			this.length = this.list[i].getLength();
		}
	}
	this.length -= Day.BOTTOM_PADDING + Day.TOP_PADDING + Day.TOP_HEADER;
}

frame.resetDaysWidth = function () {
	for(var i=0;i<this.list.length;i++) {
		this.list[i].resize(this.list.length);
	}
}

frame.normailizeByTime = function () {
	var begin = this.min, ppm = this.length/(this.max - this.min);
	
	this.timeline.normalize(begin,ppm,this.length);
	
	for(var i=0;i<this.list.length;i++) {
		this.list[i].normalize(begin,ppm);
	}
}

frame.init = function ( timeline ) {

	this.list = new Array();
	
	this.min = 24*60;
	this.max = 0;
	this.ppm = 0;
	this.length = 0;
	
	this.timeline = timeline;
	
	this.div = document.createElement('div');
	this.div.className = 'frame';
	document.body.appendChild(this.div);
	
	this.timeDiv = document.createElement('div');
	this.timeDiv.className = 'timeFrame';
	this.div.appendChild(this.timeDiv);
	this.timeDiv.appendChild(this.timeline.getHTMLElement());
	
	this.daysDiv = document.createElement('div');
	this.daysDiv.className = 'daysFrame';
	this.div.appendChild(this.daysDiv);
	
	window.onresize = function ()
	{
		frame.resize();
		frame.normailizeByTime();
	}
	
}

frame.forEachDay = function (predicate) {
	for(var i=0;i<this.list.length;i++) {
		if(!predicate(this.list[i])) {
			break;
		}
	}
}

frame.addDay = function (day) {
	if(this.min > day.begin) {
		this.min = day.begin;
	}
	if(this.max < day.begin + day.length) {
		this.max = day.begin + day.length;
	}
	this.list.push(day);
	this.daysDiv.appendChild(day.getHTMLElement());
}

frame.setVisible = function () {
	this.resize();
	this.resetDaysWidth();
	this.normailizeByTime();
}