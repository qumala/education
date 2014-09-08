window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 45) );
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
	    mon = Day.create( 1, 'Понедельник' ),
	    tue = Day.create( 2, 'Вторник'     ),
	    wed = Day.create( 3, 'Среда'       ),
	    thu = Day.create( 4, 'Четверг'     ),
	    fri = Day.create( 5, 'Пятница'     ),
	    sat = Day.create( 6, 'Суббота'     );
	    
	var 
	    sbp  = Subject.create( 'ФТТ',       '../courses/sbp.html',  Subject.COMMON  ),
	    mmp  = Subject.create( 'ММФ',       '../courses/mmp.html',  Subject.COMMON  ),
	    eng  = Subject.create( 'ИнЯз',      '../courses/eng.html',  Subject.LIBERAL ),
	    dis  = Subject.create( 'ЦИС',       '../courses/dis.html',  Subject.SPECIAL ),
	    unix = Subject.create( 'UNIX',      '../courses/unix.html', Subject.SPECIAL ),
	    sapr = Subject.create( 'САПР',      '../courses/sapr.html', Subject.SPECIAL ),
	    scdb = Subject.create( 'СУБД',      '../courses/scdb.html', Subject.SPECIAL ),
	    phil = Subject.create( 'Философия', '../courses/phil.html', Subject.LIBERAL );
	    
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
	    serdyukov   = Teacher.create('Сердюков'),
	    sabitov     = Teacher.create('Сабитов');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); };
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  sbp,  nsu(413),       kozhevnikov ));
	mon.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  sbp,  nsu(405),       pletnev     ));
	
	// tue.add(Course.create( 9*60 +  0, 1*60 + 35, PRACTICE, sbp,  nsu('т' + 304), pletnev     ));
	tue.add(Course.create(13*60 + 45, 1*60 + 35, PRACTICE, scdb, inp(508),       sabitov     ));
	tue.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  mmp,  nsu(322),       bugaeva     ));
	tue.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  eng,  nsu(320),       sapchenko   ));
	
	wed.add(Course.create(10*60 + 15, 1*60 + 35, PRACTICE, dis,  inp('КЗал'),    kovalenko   ));
	wed.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE,  unix, inp(508),       irtegov     ));
	wed.add(Course.create(14*60 + 15, 1*60 + 35, PRACTICE, unix, inp(508),       rutman      ));
	wed.add(Course.create(16*60 +  0, 2*60 + 25, PRACTICE, sapr, inp(508),       kurilin     ));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  scdb, inp(508),       pirogov     ));
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  sbp,  nsu(253),       kozhevnikov ));
	thu.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  sbp,  nsu(307 + 'а'), pletnev     ));
	thu.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  phil, nsu(247),       borisov     ));
	
	fri.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,  eng,  nsu(328),       sapchenko   ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  mmp,  nsu('318'),     serdyukov   ));
	sat.add(Course.create(12*60 + 30, 1*60 + 35, SEMINAR,  mmp,  nsu('531'),     bugaeva     ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
