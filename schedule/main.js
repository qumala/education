window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 50) );
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
	    mon = Day.create( 1, 'Понедельник' ),
	    tue = Day.create( 2, 'Вторник'     ),
	    wed = Day.create( 3, 'Среда'       ),
	    thu = Day.create( 4, 'Четверг'     ),
	    fri = Day.create( 5, 'Пятница'     );
	    // sat = Day.create( 6, 'Суббота'     );
	    
	var 
	    grob = Subject.create( 'Гр.Об.',    '../courses/grob.html', Subject.LIBERAL ),
	    econ = Subject.create( 'Экон.теор.','../courses/econ.html', Subject.LIBERAL ),
	    eng  = Subject.create( 'Ин.Яз.',    '../courses/eng.html',  Subject.LIBERAL ),
	    cph  = Subject.create( 'Выч.Физ.',  '../courses/cph.html',  Subject.COMMON  ),
	    uel  = Subject.create( 'Мк.Электр.','../courses/uel.html',  Subject.COMMON  ),
	    net  = Subject.create( 'Сети',      '../courses/net.html',  Subject.SPECIAL ),
	    gfx  = Subject.create( 'Графика',   '../courses/gfx.html',  Subject.SPECIAL );
	    
	var 
	    idrisov     = Teacher.create('Идрисов Р.И.'),
	    cheblakov   = Teacher.create('Чеблаков П.Б.'),
	    valeev      = Teacher.create('Валеев Т.Ф.'),
	    hairulin    = Teacher.create('Хайрулин С.С.'),
	    unknown     = Teacher.create('');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); },
	    iae = function (aud) { return Location.create("ИАиЭ",aud); },
	    mil = Location.create("Часть",'');
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create( 9*60 +  0, 2*60 + 25, LECTURE,  grob, mil,            unknown     ));
	
	tue.add(Course.create( 9*60 +  0, 0*60 + 45, LECTURE,  econ, nsu('БА'),      unknown     ));
	tue.add(Course.create( 9*60 + 55, 0*60 + 45, SEMINAR,  econ, nsu(''),        unknown     ));
	
	wed.add(Course.create( 9*60 +  0, 1*60 + 40, LECTURE,  gfx,  inp(508),       valeev      , Course.UNABLE));
	wed.add(Course.create(10*60 + 50, 1*60 + 40, SEMINAR,  gfx,  inp(508),       hairulin    , Course.UNABLE));
	
	thu.add(Course.create(10*60 + 50, 1*60 + 40, LECTURE,  net,  inp(508),       idrisov     , Course.UNABLE));
	thu.add(Course.create(12*60 + 40, 1*60 + 40, SEMINAR,  net,  inp(508),       cheblakov   , Course.UNABLE));
	thu.add(Course.create(18*60 + 10, 1*60 + 40, SEMINAR,  eng,  nsu(326),       unknown     ));
	
	fri.add(Course.create(14*60 + 30, 1*60 + 40, SEMINAR,  eng,  nsu(330),       unknown     ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	// week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
