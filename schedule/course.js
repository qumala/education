Course = new Object();

ACTIVE_MASK = 0x1;
ACTIVE      = 0x0;
INACTIVE    = 0x1;

TYPE_MASK = 0x6;
LECTURE   = 0x0;
SEMINAR   = 0x2;
PRACTICE  = 0x4;

KIND_MASK = 0x18;
COMMON    = 0x0;
SPECIAL   = 0x8;
LIBERAL   = 0x10;

Course.create = function (start,length,type,name,place,teacher)
{
	var course = new Object();
	
	course.start   = start;
	course.length  = length;
	course.type    = type;
	course.name    = name;
	course.place   = place;
	course.teacher = teacher;
	
	course.element = document.createElement('div');
	course.element.setAttribute('class','course-container');
	course.innerElement = document.createElement('div');
	course.innerElement.setAttribute('class','course');
	course.element.appendChild(course.innerElement);
	
	course.innerElement.appendChild(course.name.element.cloneNode(true));
	course.innerElement.appendChild(course.place.element.cloneNode(true));
	course.innerElement.appendChild(course.teacher.element.cloneNode(true));
	
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
	
	return course;
};
