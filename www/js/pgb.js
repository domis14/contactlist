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

 function onDeviceReady() {
        // find all contacts
        var options = new ContactFindOptions();
        options.filter = "";
        var filter = ["displayName", "addresses"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        // display the address information for all contacts
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                      "Type: "           + contacts[i].addresses[j].type          + "\n" +
                      "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                      "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                      "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                      "Region: "         + contacts[i].addresses[j].region        + "\n" +
                      "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                      "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        alert('onError!');
    }
