var googlehome = require('google-home-notifier');
var language = 'ko'; // if not set 'us' language will be used

googlehome.ip('192.168.0.6', language); // Change to your Google Home name
// or if you know your Google Home IP
// googlehome.ip('192.168.1.20', language);

googlehome.notify('', function(res) {
    console.log(res);
});

