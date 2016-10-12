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
	    fri = Day.create( 5, 'Пятница'     ),
	    sat = Day.create( 6, 'Суббота'     ),
	    sun = Day.create( 7, 'Воскресенье' );
	
	var 
	    fcs  = Subject.create( 'ФКС',        '../courses/fcs.html', Subject.COMMON  ),
	    oto  = Subject.create( 'ОТО',        '../courses/oto.html', Subject.COMMON  ),
	    cul  = Subject.create( 'модернизм',  '../courses/cul.html', Subject.LIBERAL ),
	    eng  = Subject.create( 'ИнЯз',       '../courses/eng.html', Subject.LIBERAL ),
	    pl1  = Subject.create( 'д.г. плазмы','../courses/pl1.html', Subject.SPECIAL ),
	    clc  = Subject.create( 'д.г. вычей', '../courses/clc.html', Subject.COMMON  ),
	    pyt  = Subject.create( 'python',     '../courses/pyt.html', Subject.SPECIAL ),
	    ing  = Subject.create( 'инжекторы',  '../courses/ing.html', Subject.SPECIAL ),
	    sin  = Subject.create('синхротронное','../courses/sin.html',Subject.SPECIAL ),
	    pl2  = Subject.create( 'открытые ловушки','../courses/pl2.html', Subject.SPECIAL ),
	    phi  = Subject.create( 'Философия',  '../courses/phi.html', Subject.LIBERAL ),
	    dce  = Subject.create( 'народные',  '../courses/dce.html', Subject.LIBERAL ),
	    d19  = Subject.create( '19 века',  '../courses/d19.html', Subject.LIBERAL ),
	    d20  = Subject.create( '20 века',  '../courses/d20.html', Subject.LIBERAL );
	    
	var 
	    Tfcs = Teacher.create('Подивилов ЕВ'),
	    Teng    = Teacher.create('Тюрина НС'),
	    Tcul  = Teacher.create('Панина НЛ'),
	    Tclc = Teacher.create('Федорук'),
	    Toto      = Teacher.create('Черных'),
	    Tpl1     = Teacher.create('Беклемишев'),
	    Tpl2      = Teacher.create('Иванов'),
	    Ting     = Teacher.create('---'),
	    Tpyt     = Teacher.create('Максимов Лев'),
	    Tsin   = Teacher.create('----'),
	    Tmed =  Teacher.create('---'),
	    Tphi   = Teacher.create('Борисов');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); };
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум'),
	    //DANСE = Type.create('Танцы'),
	    ASSIGN   = Type.create('Сдача');
	
	mon.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  fcs,  nsu(434),       Tfcs ));
	mon.add(Course.create(18*60 + 10, 1*60 + 35, ASSIGN,  oto,  nsu('у расписания'),       Toto ));

	wed.add(Course.create(10*60 +  0, 1*60 + 0 , LECTURE,  ing, nsu(320),       Ting  ));
	wed.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  cul, nsu(313),       Tcul  ));
	wed.add(Course.create(18*60 + 10, 1*60 + 35, LECTURE,  pyt, nsu(315),       Tpyt  ));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE, pl1,  inp('Рютовка'),       Tpl1 ));
	thu.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE,  pl2,  inp("Рютовка"),       Tpl2 ));
	thu.add(Course.create(12*60 + 40, 1*60 + 35, PRACTICE,  pyt,  nsu(212),      Tpyt ));
	thu.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE, oto, nsu(4),        Toto ));
	thu.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR, oto, nsu(4),        Toto ));
	
	fri.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR,  phi,  nsu(3),       Tphi ));
	fri.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  eng, nsu(3120),       Teng  ));
	fri.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  fcs, nsu(2),       Tfcs  ));
	fri.add(Course.create(19*60 , 2*60 , PRACTICE,  d20, nsu(0),       Tmed     ));
	
	sat.add(Course.create( 14*60 +  30, 1*60 + 35, LECTURE,  phi, nsu('БА'),      Tphi   ));
	sat.add(Course.create(16*60 + 20, 1*60 + 35, LECTURE,  clc,  nsu(3),     Tclc    ));
	sat.add(Course.create(19*60 , 2*60 , PRACTICE,  d20, nsu(0),       Tmed     ));

	sun.add(Course.create(13*60+30,2*60, PRACTICE,  dce,  nsu('за 8'),     Tmed    ));
	sun.add(Course.create(16*60 , 2*60 , PRACTICE,  d19, nsu('новый СК'),  Tmed    ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	week.add(sun);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
