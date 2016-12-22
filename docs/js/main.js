setInterval(function() {
	var date, countYear, Msec, countDay, countHour, countMin, countSec;
	var printData = '';
	date = new Date();
	countYear = new Date(2017, 0, 9, 8, 50);
	Msec = countYear.getTime() - date.getTime();

	countDay = Math.floor(Msec / (1000 * 60 * 60 * 24));
	Msec -= (countDay * (1000 * 60 * 60 * 24));

	countHour = Math.floor(Msec / (1000 * 60 * 60));
	Msec -= (countHour * (1000 * 60 * 60));

	countMin = Math.floor(Msec / (1000 * 60));
	Msec -= (countMin * (1000 * 60));

	countSec = Math.floor(Msec / 1000);

	if (countDay != 0) {
		printData += countDay + '日';
	}
	if (countHour != 0) {
		printData += countHour + '時間';
	}
	if (countMin != 0) {
		printData += countMin + '分';
	}
	if (countSec != 0) {
		printData += countSec + '秒';
	}
	$('#count-data').html(printData);
},1000);