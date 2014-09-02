Day = new Object();

Day.create = function(num,name)
{
	var day = new Object();
	
	day.num = num;
	day.name = name;
	day.start = 0;
	day.length = 0;
	
	day.element = document.createElement('div');
	day.element.setAttribute('class','day');
	
	day.headerElement = document.createElement('h3');
	day.headerElement.setAttribute('class','day-header');
	day.headerElement.innerHTML = day.name;
	day.element.appendChild(day.headerElement);
	
	day.courses = new Array();
	
	day.add = function (course)
	{
		this.courses.push(course);
		this.element.appendChild(course.element);
	};
	
	day.width = 0;
	day.height = 0;
	day.paddingTop = 0;
	
	day.resize = function (w,h,pt)
	{
		this.width = w;
		this.height = h;
		this.element.style.width = w + 'px';
		this.element.style.height = h + 'px';
		
		this.paddingTop = pt;
		
		for(var i = 0; i < this.courses.length; ++i)
		{
			var course = this.courses[i];
			course.replace(this.paddingTop + (this.height - this.paddingTop)*(course.start - this.start)/this.length);
			course.resize(this.width, (this.height - this.paddingTop)*course.length/this.length);
		}
	};
	
	day.parent = undefined;
	
	/* Returns false if day ends */
	day.mark = function(time)
	{
		var remains = false;
		var nearest = null;
		var record = 24*60;
		for(var i = 0; i < this.courses.length; ++i)
		{
			var course = this.courses[i];
			if(course.mark(time))
			{
				if(course.start < record && course.start - time > 0)
				{
					record = course.start;
					nearest = course;
				}
				remains = true;
			}
		}
		if(nearest != null)
		{
			nearest.markNearest(time);
		}
		return remains;
	}
	day.unmark = function()
	{
		for(var i = 0; i < this.courses.length; ++i)
		{
			this.courses[i].unmark();
		}
	}
	
	return day;
}
