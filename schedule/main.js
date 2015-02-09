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
	    ftt  = Subject.create( 'Физ.конд.с','../courses/ftt.html',  Subject.COMMON  ),
	    stat = Subject.create( 'Мат.Ст.',   '../courses/stat.html', Subject.COMMON  ),
	    eng  = Subject.create( 'Ин.Яз.',    '../courses/eng.html',  Subject.LIBERAL ),
	    tsani= Subject.create( 'ТСАНИ',     '../courses/tsani.html',Subject.SPECIAL ),
	    ood  = Subject.create( 'ООАиД',     '../courses/ood.html',  Subject.SPECIAL ),
	    elem = Subject.create( 'Элем.Част.','../courses/elem.html', Subject.SPECIAL ),
	    proc = Subject.create( 'Микропроц.','../courses/proc.html', Subject.SPECIAL ),
	    apmc = Subject.create( 'Арх.иПр.МК','../courses/apmc.html', Subject.SPECIAL ),
	    pexp = Subject.create( 'ЭВМвФиз.Э.','../courses/pexp.html', Subject.SPECIAL ),
	    phil = Subject.create( 'Философия', '../courses/phil.html', Subject.LIBERAL );
	    
	var 
	    kozhevnikov = Teacher.create('Кожевников А.А.'),
	    pletnev     = Teacher.create('Плетнев Н.Г.'),
	    kovalevsky  = Teacher.create('Ковалевский А.П.'),
	    hruschev    = Teacher.create('Хрущев С.Е.'),
	    sapchenko   = Teacher.create('Сапченко Н.А.'),
	    miginsky    = Teacher.create('Мигинский Д.С.'),
	    gayazov     = Teacher.create('Гаязов В.С.'),
	    kurilin     = Teacher.create('Курилин О.Ю.'),
	    zhulanov    = Teacher.create('Жуланов В.В.'),
	    tsyplakov   = Teacher.create('Цыплаков Д.А.'),
	    korol       = Teacher.create('Король А.А.'),
	    kovalenko   = Teacher.create('Коваленко Ю.В.'),
	    unknown     = Teacher.create('');
	    
	var 
	    nsu = function (aud) { return Location.create("",aud); },
	    inp = function (aud) { return Location.create("ИЯФ",aud); };
	    iae = function (aud) { return Location.create("ИАиЭ",aud); };
	
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create( 9*60 +  0, 1*60 + 35, SEMINAR,  ood,  inp(508),       gayazov     ));
	mon.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  ood,  iae('УЦ'),      miginsky    ));
	mon.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  ftt,  nsu(415),       kozhevnikov ));
	mon.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  ftt,  nsu(435),       pletnev     ,1));
	
	tue.add(Course.create( 9*60 +  0, 3*60 + 20, PRACTICE, apmc, inp(508),       kurilin     ));
	tue.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  ftt,  nsu(247),       pletnev     ));
	tue.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  eng,  nsu(326),       sapchenko   ));
	
	wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  elem, inp('КЗал'),    zhulanov    ));
	wed.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  proc, inp('КЗал'),    unknown     ));
	
	thu.add(Course.create(10*60 + 45, 3*60 + 20, PRACTICE, tsani,nsu(346),       unknown     ));
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  stat, nsu('БА'),      kovalevsky  ));
	thu.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  stat, nsu(424),       hruschev    ));
	
	fri.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  pexp, inp(508),       korol       ));
	fri.add(Course.create(12*60 + 30, 1*60 + 35, SEMINAR,  pexp, inp(508),       korol       ));
	fri.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  eng,  nsu(436),       sapchenko   ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR,  phil, nsu(437),       tsyplakov   ));
	sat.add(Course.create(12*60 + 30, 1*60 + 35, LECTURE,  ftt,  nsu(416),       kozhevnikov ,1));
	
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
