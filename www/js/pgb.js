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


function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};
 
function onError(contactError) {
    alert('onError!');
};
 
// find all contacts with 'Bob' in any name field 
var options      = new ContactFindOptions();
options.filter   = "M";
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;

var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
