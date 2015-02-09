Course = new Object();

/* Course type */
Course.LECTURE  = 0x1;
Course.SEMINAR  = 0x2;
Course.PRACTICE = 0x3;

/* Timing state */
Course.NONE      = 0x0;
Course.CURRENT   = 0x1;
Course.NEXT      = 0x2;
Course.PREVIOUS  = 0x3;
Course.NEAREST   = 0x4;
Course.UNABLE    = 0x5;

Course.create = function (start,length,type,name,place,teacher,flicker)
{
	var course = new Object();
	
	course.start   = start;
	course.length  = length;
	course.type    = type;
	course.name    = name;
	course.place   = place;
	course.teacher = teacher;
	course.flicker = flicker;
	
	course.element = document.createElement('div');
	course.element.setAttribute('class','course-container');
	course.innerElement = document.createElement('div');
	course.innerElement.setAttribute('class','course');
	course.innerElement.href = course.name.link;
	course.innerElement.onclick = function () { window.open(this.href); };
	course.innerElement.onmousedown = function (event) { if(event.which == 2) { window.open(this.href, '_blank'); } };
	course.element.appendChild(course.innerElement);
	
	course.slider = new Object();
	course.slider.element = document.createElement('div');
	course.slider.element.setAttribute('class','course-slider');
	course.innerElement.appendChild(course.slider.element);
	course.slider.coverage = 0.0;
	course.resizeSlider = function ()
	{
		this.slider.element.style.height = this.slider.coverage*this.height + 'px';
	}
	
	course.timer = new Object();
	course.timer.element = document.createElement('div');
	course.timer.element.style.display = 'none';
	course.innerElement.appendChild(course.timer.element);
	
	course.printTime = function (time)
	{
		this.timer.element.style.display = 'inline-block';
		this.timer.element.setAttribute('class','timer-remain');
		
		var minutes = time % 60;
		var hours = Math.floor(time/60) % 24;
		var days = Math.floor(time/(60*24));
		var string = '';
		if(days > 0)
		{
			string += days + 'd ' + hours + 'h ' + minutes + 'm';
		}
		else if(hours > 0)
		{
			string += hours + 'h ' + minutes + 'm';
		}
		else
		{
			string += minutes + 'm';
		}
		
		this.timer.element.innerHTML = string;
		
		if(days == 0 && hours == 0 && minutes < 30)
		{
			this.timer.element.style.fontWeight = 'bold';
		}
		
		return string;
	}
	
	course.innerElement.appendChild(course.type.cloneElement());
	
	course.innerElement.appendChild(course.name.cloneElement());
	course.innerElement.appendChild(course.place.cloneElement());
	course.innerElement.appendChild(course.teacher.cloneElement());
	
	course.position = 0;
	course.width = 0;
	course.height = 0;
	
	course.replace = function(h)
	{
		this.position = h;
		this.element.style.top = this.position + 'px';
	}
	
	course.resize = function(w,h)
	{
		this.width = w;
		this.height = h;
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';

	};
	
	course.parent = undefined;
	
	course.state = Course.NONE;
	
	course.isUnable = function (date)
	{
		if(flicker != undefined)
		{
			var onejan = new Date(date.getFullYear(),0,1);
			var doy = Math.ceil((date - onejan) / 86400000);
			var week_flicker = Math.ceil(doy/7) % 2;
			if(this.flicker != week_flicker)
			{
				return true;
			}
		}
		return false;
	}
	
	course.mark = function (time)
	{
		if(this.isUnable(new Date()))
		{
			return false;
		}
		if(time < this.start)
		{
			this.state = Course.NEXT;
			this.innerElement.classList.add('time-next');
			return true;
		}
		if(time >= this.start)
		{
			if(time <= this.start + this.length)
			{
				this.state = Course.CURRENT;
				this.innerElement.classList.add('time-current');
				
				this.slider.coverage = (time - this.start)/this.length;
				this.resizeSlider();
				
				var ltime = this.start + this.length - time;
				this.printTime(ltime);
			
			}
			if(time > this.start + this.length)
			{
				this.state = Course.PREVIOUS;
				this.innerElement.classList.add('time-previous');
			}
			
			return false;
		}
	}
	course.markNearest = function (time)
	{
		this.state = Course.NEAREST;
		this.innerElement.classList.add('time-nearest');
		
		time = this.start - time;
		var string = this.printTime(time);
		
		document.title = string + ' left';
	}
	course.unmark = function ()
	{
		this.state = Course.NONE;
		
		this.innerElement.classList.remove('time-unable');
		this.innerElement.classList.remove('time-current');
		this.innerElement.classList.remove('time-previous');
		this.innerElement.classList.remove('time-next');
		this.innerElement.classList.remove('time-nearest');
		
		course.timer.element.style.display = 'none';
		this.timer.element.style.fontWeight = 'normal';
		
		this.slider.coverage = 0.0;
		
		if(this.isUnable(new Date()))
		{
			this.state = Course.UNABLE;
			this.innerElement.classList.add('time-unable');
		}
		
		this.resizeSlider();
	}
	
	return course;
};
