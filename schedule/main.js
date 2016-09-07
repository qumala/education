window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 50), 1*60 + 50);
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
	    mon = Day.create( 1, 'Понедельник' ),
	    tue = Day.create( 2, 'Вторник'     ),
	    wed = Day.create( 3, 'Среда'       ),
	    thu = Day.create( 4, 'Четверг'     ),
	    fri = Day.create( 5, 'Пятница'     );
	    sat = Day.create( 6, 'Суббота'     );
	
	var 
	    sbp  = Subject.create( 'ФКС',       '../courses/sbp.html',  Subject.COMMON  ),
	    mmp  = Subject.create( 'ММФ',       '../courses/mmp.html',  Subject.COMMON  ),
	    eng  = Subject.create( 'ИнЯз',      '../courses/eng.html',  Subject.LIBERAL ),
	    ast  = Subject.create( 'Астрономия','../courses/ast.html',  Subject.COMMON  ),
	    unix = Subject.create( 'UNIX',      '../courses/unix.html', Subject.SPECIAL ),
	    shel = Subject.create( 'Shell',     '../courses/unix.html', Subject.SPECIAL ),
	    net  = Subject.create( 'САПР',      '../courses/sapr.html', Subject.SPECIAL ),
	    det  = Subject.create( 'СУБД',      '../courses/scdb.html', Subject.SPECIAL ),
	    phil = Subject.create( 'Философия', '../courses/phil.html', Subject.LIBERAL );
	    
	var 
	    kozhevnikov = Teacher.create('Кожевников'),
	    belheeva    = Teacher.create('Бельхеева'),
	    tihomirova  = Teacher.create('Тихомирова'),
	    surdin      = Teacher.create('Сурдин'),
	    irtegov     = Teacher.create('Иртегов'),
	    rutman      = Teacher.create('Рутман'),
	    kurilin     = Teacher.create('Курилин'),
	    borisov     = Teacher.create('Борисов'),
	    cheblakov   = Teacher.create('Чеблаков'),
	    tsyplakov   = Teacher.create('Цыплаков'),
	    abasheeva   = Teacher.create('Абашеева'),
	    zhulanov    = Teacher.create('Жуланов'),
	    sosedkin    = Teacher.create('Соседкин');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); };
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  sbp,  nsu(316),       kozhevnikov ));
	mon.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  sbp,  nsu(433),       kozhevnikov ));
	
	// tue.add(Course.create( 12*60 +  40, 1*60 + 35, LECTURE, ast,  nsu('БА'), surdin     ));
	tue.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  sbp,  inp(324),       kozhevnikov, 0));
	// tue.add(Course.create(14*60 + 30, 1*60 + 35, PRACTICE, sbp,  inp(324),       kozhevnikov ));
	tue.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  mmp,  nsu(328),       belheeva    ));
	tue.add(Course.create(18*60 + 10, 1*60 + 35, SEMINAR,  eng,  nsu(5218),      tihomirova  ));
	
	wed.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE,  det,  inp('КЗал'),    zhulanov    ));
	wed.add(Course.create(12*60 + 40, 1*60 + 35, PRACTICE, unix, inp(508),       rutman      ));
	wed.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  unix, inp(508),       irtegov     ));
	wed.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  shel, inp(508),       irtegov     ));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 35, PRACTICE, net,  inp(508),       sosedkin    ));
	thu.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE,  net,  inp(508),       cheblakov   ));
	thu.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  eng,  nsu(5263),      tihomirova  ));
	
	fri.add(Course.create( 9*60 +  0, 1*60 + 35, PRACTICE, det, inp(508),        kurilin     ));
	fri.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR,  sbp,  nsu(326),       kozhevnikov ));
	// fri.add(Course.create( 12*60 +  40, 1*60 + 35, LECTURE, ast,  nsu('БА'), surdin     ));
	fri.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,  phil, nsu(316),       borisov     ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE,  mmp,  nsu('315'),     abasheeva   ));
	sat.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR,  mmp,  nsu('322'),     belheeva    ));
	
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
