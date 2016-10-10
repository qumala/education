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
	    sat = Day.create( 6, 'Суббота'     );
	
	var 
	    fcs  = Subject.create( 'ФКС',        '../courses/eng.html', Subject.COMMON  ),
	    oto  = Subject.create( 'ОТО',        '../courses/eng.html', Subject.COMMON  ),
	    cul  = Subject.create( 'модернизм',  '../courses/eng.html', Subject.LIBERAL ),
	    eng  = Subject.create( 'ИнЯз',       '../courses/eng.html', Subject.LIBERAL ),
	    pl1  = Subject.create( 'д.г. плазмы','../courses/eng.html', Subject.SPECIAL ),
	    clc  = Subject.create( 'д.г. вычей', '../courses/eng.html', Subject.COMMON  ),
	    pyt  = Subject.create( 'python',     '../courses/eng.html', Subject.SPECIAL ),
	    ing  = Subject.create( 'инжекторы',  '../courses/eng.html', Subject.SPECIAL ),
	    sin  = Subject.create('синхротронное','../courses/eng.html',Subject.SPECIAL ),
	    pl2  = Subject.create( 'открытые ловушки','../courses/eng.html', Subject.SPECIAL ),
	    phi  = Subject.create( 'Философия',  '../courses/eng.html', Subject.LIBERAL ),
	    dce  = Subject.create( 'народные',  '../courses/eng.html', Subject.LIBERAL ),
	    d19  = Subject.create( '19 века',  '../courses/eng.html', Subject.LIBERAL ),
	    d20  = Subject.create( '20 века',  '../courses/eng.html', Subject.LIBERAL );
	    
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
	
	mon.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  fcs,  nsu(316),       Tfcs ));
	
	wed.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  cul, nsu(508),       Tcul  ));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 35, PRACTICE, pl1,  inp(508),       Tpl1 ));
	thu.add(Course.create(10*60 + 50, 1*60 + 35, LECTURE,  pl2,  inp(508),       Tpl2 ));
	thu.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  pyt,  nsu(5263),      Tpyt ));
	thu.add(Course.create(15*60 + 30, 3*60 + 25, PRACTICE, oto, nsu(508),        Toto ));
	
	fri.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR,  phi,  nsu(326),       Tphi ));
	fri.add(Course.create(12*60 + 40, 1*60 + 35, SEMINAR,  eng, nsu(316),       Teng  ));
	//fri.add(Course.create(14*60 + 30, 1*60 + 35, SEMINAR,  fcs, nsu(316),       Tfcs  ));
	//fri.add(Course.create(19*60 , 2*60 , DANSE,  d20, nsu(316),       Tmed     ));
	
	//sat.add(Course.create( 14*60 +  30, 1*60 + 35, LECTURE,  phi, nsu('БА'),      Tphi   ));
	//sat.add(Course.create(16*60 + 20, 1*60 + 35, ASSIGN,  clc,  nsu('247'),     Tclc    ));
	
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
