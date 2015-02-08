window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 7*(1*60 + 45) );
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
	    ftt  = Subject.create( 'ФТТ',       '../courses/ftt.html',  Subject.COMMON  ),
	    stat = Subject.create( 'Мат.Ст.',   '../courses/stat.html', Subject.COMMON  ),
	    eng  = Subject.create( 'Ин.Яз.',    '../courses/eng.html',  Subject.LIBERAL ),
	    tsani= Subject.create( 'ТСАНИ',     '../courses/tsani.html',Subject.SPECIAL ),
	    ood  = Subject.create( 'ООАиД',     '../courses/ood.html',  Subject.SPECIAL ),
	    elem = Subject.create( 'Элем.Част.','../courses/elem.html', Subject.SPECIAL ),
	    proc = Subject.create( 'Микропроц.','../courses/proc.html', Subject.SPECIAL ),
	    apmc = Subject.create( 'Арх.иПр.МК','../courses/apmc.html', Subject.SPECIAL ),
	    pexp = Subject.create( 'ЭВМвФиз.Э.','../courses/pexp.html', Subject.SPECIAL ),
	    phil = Subject.create( 'Философия', '../courses/phil.html', Subject.LIBERAL );
	    eco  = Subject.create( 'Экол.Проб.','../courses/eco.html',  Subject.LIBERAL );
	    
	var 
	    kozhevnikov = Teacher.create('Кожевников А.А.'),
	    pletnev     = Teacher.create('Плетнев Н.Г.'),
	    kovalevsky  = Teacher.create('Ковалевский А.П.'),
	    hruschev    = Teacher.create('Хрущев С.Е.'),
	    kasyanova   = Teacher.create('Касьянова И.Р.'),
	    arzhannikov = Teacher.create('Аржанников А.В.'),
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
	mon.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  ftt,  nsu(316),       kozhevnikov ));
	mon.add(Course.create(16*60 +  0, 1*60 + 35, SEMINAR,  ftt,  nsu(247),       pletnev     ));
	mon.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  stat, nsu(338),       hruschev    ));
	
	tue.add(Course.create( 9*60 +  0, 3*60 + 20, PRACTICE, apmc, inp(508),       kurilin     ));
	tue.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,  eng,  nsu(338),       kasyanova   ));
	tue.add(Course.create(16*60 +  0, 0*60 + 45, SEMINAR,  ftt,  nsu(433),       pletnev     ));
	
	wed.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  elem, inp('КЗал'),    zhulanov    ));
	wed.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  proc, inp('КЗал'),    unknown     ));
	
	thu.add(Course.create(10*60 + 45, 3*60 + 20, PRACTICE, tsani,nsu(346),       unknown     ));
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  stat, nsu('БА'),      kovalevsky  ));
	thu.add(Course.create(17*60 + 45, 1*60 + 35, SEMINAR,  eng,  nsu(436),       kasyanova   ));
	thu.add(Course.create(19*60 + 20, 1*60 + 35, LECTURE,  eco,  nsu('БА'),      arzhannikov ));
	
	fri.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  pexp, inp(508),       korol       ));
	fri.add(Course.create(12*60 + 30, 1*60 + 35, SEMINAR,  pexp, inp(508),       korol       ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 35, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 45, 1*60 + 35, SEMINAR,  phil, nsu(437),       tsyplakov   ));
	sat.add(Course.create(12*60 + 30, 0*60 + 45, LECTURE,  ftt,  nsu('БА'),     kozhevnikov ));
	
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
