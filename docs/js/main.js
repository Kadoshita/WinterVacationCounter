setInterval(function() {
	var date, countYear, Msec, countDay, countHour, countMin, countSec;
	var printData = '';
	date = new Date();
	countYear = new Date(2017, 0, 9, 8, 50);
	Msec = countYear.getTime() - date.getTime();

	countDay=~~(Msec/(1000 * 60 * 60 * 24));
	Msec -= (countDay * (1000 * 60 * 60 * 24));

	countHour=~~(Msec/(1000 * 60 * 60));
	Msec -= (countHour * (1000 * 60 * 60));

	countMin=~~(Msec/(1000 * 60));
	Msec -= (countMin * (1000 * 60));

	countSec=~~(Msec/1000);

	if (countDay != 0) {
		printData += '<span style="font-weight: bold;">'+countDay + '</span>日';
	}
	if (countHour != 0) {
		printData += '<span style="font-weight: bold;">'+ countHour + '</span>時間';
	}
	if (countMin != 0) {
		printData += '<span style="font-weight: bold;">'+ countMin + '</span>分';
	}
	if (countSec != 0) {
		printData += '<span style="font-weight: bold;">'+ countSec + '</span>秒';
	}
	$('#count-data').html('冬休み終了まであと<br>'+printData);
},1000);