window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 45), 1*60 + 45);
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
	    mil = Location.create("<a target='_blank' href='http://2gis.ru/novosibirsk/callout/83.100446%2C54.875724%2C17/center/83.094664%2C54.875261/zoom/15'>Военное училище</a>",'');
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create( 9*60 +  0, 2*60 + 30, LECTURE,  grob, mil,            unknown     ));
	mon.add(Course.create(14*60 + 15, 0*60 + 45, LECTURE,  econ, nsu('БА'),      unknown     ));
	mon.add(Course.create(15*60 +  5, 0*60 + 45, SEMINAR,  econ, nsu(''),        unknown     ));
	mon.add(Course.create(16*60 + 00, 1*60 + 35, SEMINAR,  cph,  nsu('436'),     unknown     ));
	
	tue.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  cph,  nsu('БА'),      unknown     ));
	tue.add(Course.create(16*60 +  0, 1*60 + 35, LECTURE,  uel,  iae(''),        unknown     ));
	tue.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  uel,  nsu(424),       unknown     ));
	
	wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  gfx,  inp(508),       valeev      ));
	wed.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR,  gfx,  inp(508),       hairulin,   Course.UNABLE));
	
	thu.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  net,  inp(508),       idrisov     ));
	thu.add(Course.create(12*60 + 30, 1*60 + 35, SEMINAR,  net,  inp(508),       cheblakov,  Course.UNABLE));
	thu.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  eng,  nsu(326),       unknown     ));
	
	fri.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,  eng,  nsu(330),       unknown     ));
	
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
