Subject = new Object();
Location = new Object();
Teacher = new Object();

Subject.create = function (name)
{
	var subject = new Object();
	
	subject.name = name;
	
	subject.element = document.createElement('div');
	subject.element.setAttribute('class','course-name');
	subject.element.innerHTML = subject.name;
	
	return subject;
}

Location.create = function (builing,auditory)
{
	var location = new Object();
	
	location.builing = builing;
	location.auditory = auditory;
	
	location.element = document.createElement('div');
	location.element.setAttribute('class','course-place');
	if(location.builing.length > 0)
	{
		location.element.innerHTML = location.builing + ' ' + location.auditory;
	}
	else
	{
		location.element.innerHTML = location.auditory;
	}
	
	return location;
}

Teacher.create = function (name)
{
	var teacher = new Object();
	
	teacher.name = name;
	
	teacher.element = document.createElement('div');
	teacher.element.setAttribute('class','teacher');
	teacher.element.innerHTML = teacher.name;
	
	return teacher;
}
