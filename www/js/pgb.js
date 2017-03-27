function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Informacje o telefonie' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personalData()
{
	info =  'Moje imie to Dominik' + '\n' +
			'a nazwisko: Adamski \n';

	navigator.notification.alert(info);
}

function businesscard()
{
	info = 'PERSONAL INFORMATION \n' +
	'Name and surname: Dominik Adamski \n' +
	'Email: dominik.adamski@interia.pl \n' +
	'Dean\'s group: KrDUIs1011 \n' +
	'Field of study: applied computer science';
	navigator.notification.alert(info);
}

function network()
{
	info = 'Informacje dotyczace połączenia z internetem \n' +
	'Czy jest polaczenie z wi-fi: ' + Connection.WIFI + '\n' +
	'Czy jest jakiekolwiek polaczenie z internetem:' + Connection.NONE + '\n';
	navigator.notification.alert(info);
}
