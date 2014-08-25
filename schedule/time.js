var time = new Object();

function getTimeString( value ) {
	var hour = Math.floor(value/60);
	var minute = value - hour*60;
	
	if(hour < 10) {
		hour = '0' + hour;
	}
	if(minute < 10) {
		minute = '0' + minute;
	}
	
	return hour + ':' + minute;
}

var TimeValue = new Object();
TimeValue.create = function ( value ) {
	var obj = new Object();
	
	obj.value = value;
	
	obj.div = document.createElement('div');
	obj.div.className = 'timeValue';
	obj.div.innerHTML = getTimeString(value);
	
	obj.container = document.createElement('div');
	obj.container.className = 'timeValueContainer';
	
	obj.marker = document.createElement('div');
	obj.marker.className = 'timeValueMarker';
	
	obj.container.appendChild(obj.marker);
	obj.container.appendChild(obj.div);
	
	obj.getHTMLElement = function () {
		return this.container;
	}
	
	obj.setPosition = function ( pos ) {
		obj.container.style.top = pos + 'px';
	}
	obj.getHeight = function () {
		return obj.container.offsetHeight;
	}
	
	return obj;
}

time.init = function () {
	this.timeline = new Object();
	
	this.timeline.init = function () {
		this.div = document.createElement('div');
		this.div.className = "timeLine";
		this.getHTMLElement = function () {
			return this.div;
		}
		
		this.div.style.marginTop = Day.TOP_HEADER + 'px';
		this.div.style.marginBottom = Day.BOTTOM_PADDING + 'px';
		
		this.values = new Array();
		this.values.push( TimeValue.create(9*60 + 0) );
		this.values.push( TimeValue.create(10*60 + 45) );
		this.values.push( TimeValue.create(12*60 + 30) );
		this.values.push( TimeValue.create(14*60 + 15) );
		this.values.push( TimeValue.create(16*60 + 0) );
		this.values.push( TimeValue.create(17*60 + 45) );
		
		for(var i = 0; i < this.values.length; i++) {
			this.div.appendChild(this.values[i].getHTMLElement());
		}
		
		this.normalize = function ( begin, ppm, length ) {
		
			this.div.style.height = (length + Day.TOP_PADDING) + 'px';
			
			var zero = Day.TOP_PADDING - 1;
			for(var i = 0; i < this.values.length; i++) {
				this.values[i].setPosition(zero + (this.values[i].value - begin)*ppm);
				zero -= this.values[i].getHeight();
			}
			
		}
	}
	
	this.timeline.init();
}