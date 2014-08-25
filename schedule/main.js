window.onload = function main() {
	
	time.init();
	
	frame.init(time.timeline);
		
	var
		mon = Day.create( 0, "Пн" ),
		tue = Day.create( 1, "Вт" ),
		wed = Day.create( 2, "Ср" ),
		thu = Day.create( 3, "Чт" ),
		fri = Day.create( 4, "Пт" ),
		sat = Day.create( 5, "Сб" );
		
	var
		os		= Subject.create("Опер.системы"),
		java	= Subject.create("Java"),
		rellab	= Subject.create("Рад.пр."),
		elmag	= Subject.create("Эл.маг."),
		mmp		= Subject.create("Мет.М.Ф."),
		gym		= Subject.create("Физв."),
		optlab	= Subject.create("Лаб.пр.опт."),
		ood		= Subject.create("ООП"),
		funcan	= Subject.create("О.функ.ан"),
		rel		= Subject.create("Радиоэл."),
		dism	= Subject.create("Дискр.м."),
		engl	= Subject.create("Ин.яз.");
		
	var
		fatbro 		= Teacher.create("Иртегов Д.В."),
		lyah 		= Teacher.create("Лях Т.В."),
		boroda		= Teacher.create("Черкасский В.С."),
		bugaeva		= Teacher.create("Бугаева С.Г."),
		rylov		= Teacher.create("Рылов В.Ю."),
		serdyukov	= Teacher.create("Сердюков А.С."),
		pogosov		= Teacher.create("Погосов А.Г."),
		treskov		= Teacher.create("Тресков С.А."),
		rotanova	= Teacher.create("Ротанова Т.А."),
		polina		= Teacher.create("Кононова П.А."),
		malikova	= Teacher.create("Маликова О.Ю.");
		
	
	mon.addCourse( Course.create(	Course.PAIR1,		Course.ONE_PAIR,	Course.LECTURE,		os,		Location.create(437),		fatbro		) );
	mon.addCourse( Course.create(	Course.PAIR3 - 30,	Course.ONE_PAIR,	Course.SEMINAR,		java,	Location.INP,				lyah		) );
	mon.addCourse( Course.create(	Course.PAIR4,		Course.TWO_PAIRS,	Course.LABWORK,		rellab,	Location.create(348)					) );
	
	tue.addCourse( Course.create(	Course.PAIR1,		Course.ONE_PAIR,	Course.SEMINAR,		elmag,	Location.create(328),		boroda		) );
	tue.addCourse( Course.create(	Course.PAIR2,		Course.ONE_PAIR,	Course.ASSIGN,		elmag,	Location.UNKNOWN,			boroda		) );
	tue.addCourse( Course.create( 	Course.PAIR3,		Course.ONE_PAIR,	Course.SEMINAR,		mmp,	Location.create(334),		bugaeva		) );
	tue.addCourse( Course.create( 	Course.PAIR5,		Course.ONE_PAIR,	Course.GYM,			gym,	Location.SC								) );
	
	wed.addCourse( Course.create( 	Course.PAIR1,		Course.TWO_PAIRS,	Course.LABWORK,		optlab,	Location.create(265 + 'опт.')			) );
	wed.addCourse( Course.create( 	Course.PAIR5,		Course.ONE_PAIR,	Course.LECTURE,		ood,	Location.create(402),		rylov 		) );

	thu.addCourse( Course.create( 	Course.PAIR1,		Course.ONE_PAIR,	Course.LECTURE,		mmp,	Location.create(416),		serdyukov 	) );
	thu.addCourse( Course.create( 	Course.PAIR2,		Course.ONE_PAIR,	Course.SEMINAR,		mmp,	Location.create(336),		bugaeva 	) );
	thu.addCourse( Course.create( 	Course.PAIR3,		Course.ONE_PAIR,	Course.LECTURE,		elmag,	Location.BA,				pogosov 	) );
	thu.addCourse( Course.create( 	Course.PAIR5,		Course.ONE_PAIR,	Course.SEMINAR,		elmag,	Location.create(334),		boroda		) );
	
	fri.addCourse( Course.create( 	Course.PAIR1,		Course.ONE_PAIR,	Course.LECTURE,		funcan,	Location.create(316),		treskov		) );
	fri.addCourse( Course.create( 	Course.PAIR2,		Course.ONE_PAIR,	Course.SEMINAR,		funcan,	Location.create(416 + 'а'),	rotanova 	) );
	fri.addCourse( Course.create( 	Course.PAIR4,		Course.ONE_PAIR,	Course.LECTURE,		rel,	Location.BA								) );
	fri.addCourse( Course.create( 	Course.PAIR5,		Course.ONE_PAIR,	Course.GYM,			gym,	Location.SC								) );
	
	sat.addCourse( Course.create( 	Course.PAIR1,		Course.ONE_PAIR,	Course.LECTURE,		dism,	Location.create(315),		polina		) );
	sat.addCourse( Course.create( 	Course.PAIR2,		Course.ONE_PAIR,	Course.SEMINAR,		dism,	Location.create(413),		polina		) );
	sat.addCourse( Course.create( 	Course.PAIR3,		Course.ONE_PAIR,	Course.LECTURE,		engl,	Location.create(320),		malikova 	) );
	
	frame.addDay(mon);
	frame.addDay(tue);
	frame.addDay(wed);
	frame.addDay(thu);
	frame.addDay(fri);
	frame.addDay(sat);
	
	frame.setVisible();
	
}