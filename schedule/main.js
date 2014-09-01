window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 45) );
	
	var
	    mon = Day.create('Понедельник'),
	    tue = Day.create('Вторник'),
	    wed = Day.create('Среда'),
	    thu = Day.create('Четверг'),
	    fri = Day.create('Пятница'),
	    sat = Day.create('Суббота');
	    
	var 
	    sbp  = Subject.create('ФТТ'),
	    mmp  = Subject.create('ММФ'),
	    eng  = Subject.create('ИнЯз'),
	    cis  = Subject.create('ЦИС'),
	    unix = Subject.create('UNIX'),
	    sapr = Subject.create('САПР'),
	    scdb = Subject.create('СУБД'),
	    phil = Subject.create('философ');
	    
	var 
	    kozhevnikov = Teacher.create('Кожевников'),
	    pletnev     = Teacher.create('Плетнев'),
	    bugaeva     = Teacher.create('Бугаева'),
	    sapchenko   = Teacher.create('Сапченко'),
	    kovalenko   = Teacher.create('Коваленко'),
	    irtegov     = Teacher.create('Иртегов'),
	    rutman      = Teacher.create('Рутман'),
	    kurilin     = Teacher.create('Курилин'),
	    borisov     = Teacher.create('Борисов'),
	    pirogov     = Teacher.create('Пирогов'),
	    tsyplakov   = Teacher.create('Цыплаков'),
	    serdyukov   = Teacher.create('Сердюков');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("и",aud); };
	
	mon.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,            sbp,  nsu(413),       kozhevnikov ));
	mon.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,            sbp,  nsu(405),       pletnev     ));
	
	tue.add(Course.create( 9*60 +  0, 1*60 + 35, SEMINAR|INACTIVE,   sbp,  nsu('т' + 304), pletnev     ));
	tue.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,            mmp,  nsu(322),       bugaeva     ));
	tue.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,            eng,  nsu(320),       sapchenko   ));
	
	wed.add(Course.create(10*60 + 45, 1*60 + 35, PRACTICE|INACTIVE,  cis,  inp('КЗал'),    kovalenko   ));
	wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE|INACTIVE,   unix, inp(508),       irtegov     ));
	wed.add(Course.create(14*60 + 15, 1*60 + 35, PRACTICE|INACTIVE,  unix, inp(508),       rutman      ));
	wed.add(Course.create(16*60 +  0, 1*60 + 35, PRACTICE|INACTIVE,  sapr, inp(508),       kurilin     ));
	
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,            sbp,  nsu(253),       kozhevnikov ));
	thu.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,            sbp,  nsu(307 + 'а'), pletnev     ));
	thu.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,            phil, nsu(247),       borisov     ));
	
	fri.add(Course.create(12*60 + 30, 1*60 + 35, PRACTICE|INACTIVE,  scdb, inp(508),       pirogov     ));
	fri.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,            eng,  nsu(328),       sapchenko   ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,            phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,            mmp,  nsu('318'),     serdyukov   ));
	sat.add(Course.create(12*60 + 30, 1*60 + 35, SEMINAR,            mmp,  nsu('531'),     bugaeva     ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
};

window.onresize = function reshape()
{
	frame.reshape();
};
