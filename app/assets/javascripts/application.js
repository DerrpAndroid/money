// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// set endpoint and your access key
endpoint = 'live'
access_key = '13bb53272f61e0d2e6c054f55c7869b7';

// get the most recent exchange rates via the "live" endpoint:
function request_currency(){
	var x = document.getElementById("home_currencies_from").value;
	var y = document.getElementById("home_currencies_to").value;
    var sending= Number(document.getElementById("sending").value);
	var xy = "USD"+y;
    var res;
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key+"&currencies = INR,AUD,SGD",   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        //alert(json.quotes.USDINR);
        res = json.quotes.USDINR;
        save_resp(res);
        //console.log(res*Number(document.getElementById("sending").value));
        // source currency is stored in json.source
        //alert(json.source);
        
        // timestamp can be accessed in json.timestamp
        //alert(json.timestamp);
        
    }
});

function save_resp(res){
    console.log(res);
    document.getElementById("conv_res").innerHTML="You are sending " +x+" "+sending+" recipient will get : "+y+" "+res*sending;
}
}