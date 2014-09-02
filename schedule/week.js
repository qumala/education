Week = new Object();

Week.Timestamp = new Object();

Week.Timestamp.create = function (time,name)
{
	var timestamp = new Object();
	
	timestamp.time = time;
	timestamp.name = name;
	
	timestamp.element = document.createElement('h3');
	timestamp.element.setAttribute('class','timestamp');
	
	timestamp.element.innerHTML = name;
	
	timestamp.position = 0;
	
	timestamp.replace = function (p)
	{
		this.position = p;
		this.element.style.top = this.position + 'px';
	};
	
	return timestamp;
}

Week.create = function(start,length)
{
	var week = new Object();
	
	week.start = start;
	week.length = length;
	
	week.element = document.createElement('div');
	week.element.setAttribute('class','week');
	
	week.days = new Array();
	
	week.add = function (day)
	{
		this.days.push(day);
		
		day.start = this.start;
		day.length = this.length;
		
		this.element.appendChild(day.element);
	};
	
	week.width = 0;
	week.height = 0;
	week.paddingTop = 24;
	week.paddingLeft = 64;
	week.timestamps = new Array();
	
	week.resize = function (w,h)
	{
		/* Resizing HTML element */
		this.width = w;
		this.height = h;
		// this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		
		/* Days placing */
		for(var i = 0; i < this.days.length; ++i)
		{
			this.days[i].resize((this.width - this.paddingLeft)/(this.days.length), h, this.paddingTop);
		}
		
		/* Timeline placing */
		for(var i = 0; i < this.timestamps.length; ++i)
		{
			this.timestamps[i].replace(this.paddingTop + (this.height - this.paddingTop)*(this.timestamps[i].time - this.start)/this.length);
		}
	};
	
	week.parent = undefined;
	
	week.timelineElement = document.createElement('div');
	week.timelineElement.setAttribute('class','week-timeline');
	week.timelineElement.style.width = week.paddingLeft + 'px';
	week.element.appendChild(week.timelineElement);
	
	for(var time = week.start; time < week.start + week.length; time += 1*60 + 45)
	{
		var hours = Math.floor(time/60);
		var minutes = time % 60;
		
		/* Creates name */
		var name = minutes.toString();
		if(minutes < 10) { name = "".concat('0',name); }
		name = "".concat(hours,':',name);
		
		var timestamp = Week.Timestamp.create(time,name);
		week.timestamps.push(timestamp);
		week.timelineElement.appendChild(timestamp.element);
	}
	
	week.mark = function(date)
	{
		/* Unmarks all days */
		for(var i = 0; i < this.days.length; ++i)
		{
			this.days[i].unmark();
		}
		
		/* Gets current day */
		var current = date.getDay();
		var time = date.getHours()*60 + date.getMinutes();
		
		/* Marks current day */
		var remains = false;
		for(var i = 0; i < this.days.length; ++i)
		{
			if(this.days[i].num == current && this.days[i].start + this.days[i].length > time)
			{
				remains = this.days[i].mark(time);
			}
		}
		/* If day ends */
		if(!remains)
		{
			var next = current + 1;
			time -= 24*60;
			
			/* Looks for next day */
			var found = false;
			do
			{
				for(var i = 0; i < this.days.length; ++i)
				{
					if(this.days[i].num == next)
					{
						found = this.days[i].mark(time);
						if(found)
						{
							break;
						}
					}
				}
				if(found)
				{
					break;
				}
				next++;
				time -= 24*60;
				if(next > 6)
				{
					next = 0;
				}
			}
			while(!found && time > -7*24*60);
		}
	}
	
	return week;
}
