Type = new Object();
Subject = new Object();
Location = new Object();
Teacher = new Object();

Type.create = function (name)
{
	var type = new Object();
	
	type.name = name;
	type.element = document.createElement('div');
	type.element.classList.add('course-type');
	type.element.innerHTML = type.name;
	
	type.cloneElement = function ()
	{
		var cloned_elem = this.element.cloneNode(true);
		return cloned_elem;
	}
	
	return type;
}

Subject.COMMON  = 0x1;
Subject.SPECIAL = 0x2;
Subject.LIBERAL = 0x3;

Subject.create = function (name,type)
{
	var subject = new Object();
	
	subject.name = name;
	subject.type = type;
	
	subject.element = document.createElement('div');
	subject.element.classList.add('course-name');
	subject.element.innerHTML = subject.name;
	
	subject.cloneElement = function ()
	{
		var cloned_elem = this.element.cloneNode(true);
		return cloned_elem;
	}
	
	return subject;
}

Location.create = function (builing,auditory)
{
	var location = new Object();
	
	location.builing = builing;
	location.auditory = auditory;
	
	location.element = document.createElement('div');
	location.element.classList.add('course-place');
	if(location.builing.length > 0)
	{
		location.element.innerHTML = location.builing + ' ' + location.auditory;
	}
	else
	{
		location.element.innerHTML = location.auditory;
	}
	
	location.cloneElement = function ()
	{
		var cloned_elem = this.element.cloneNode(true);
		return cloned_elem;
	}
	
	return location;
}

Teacher.create = function (name)
{
	var teacher = new Object();
	
	teacher.name = name;
	
	teacher.element = document.createElement('div');
	teacher.element.classList.add('teacher');
	teacher.element.innerHTML = teacher.name;
	
	teacher.cloneElement = function ()
	{
		var cloned_elem = this.element.cloneNode(true);
		return cloned_elem;
	}
	
	return teacher;
}
