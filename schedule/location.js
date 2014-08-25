var Location = new Object();

Location.create = function ( auditory ) {
	var obj = new Object();
	obj.auditory = auditory;
	obj.name = "ауд." + obj.auditory;
	return obj;
}

Location.INP = new Object();
Location.INP.name = "ИЯФ";

Location.SC = new Object();
Location.SC.name = "С.К.";

Location.BA = new Object();
Location.BA.name = "БА";

Location.UNKNOWN = new Object();
Location.UNKNOWN.name = "";