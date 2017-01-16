(function(){

if(!navigator.geolocation){
    $('#supportBrowser').html('Your browser does not support geolocation!');
    $('#supportBrowser').addClass('alertDanger');
}else {
    $('#supportBrowser').html('Your browser support geolocation!');
    $('#supportBrowser').addClass('alertSuccess');
}

function geoSuccess(position) {
    $('#positionOutput').html('Your position it: ' + position.coords.latitude + "," + position.coords.longitude);
    let number1 = position.coords.latitude
        number2 = position.coords.longitude;
    $('.options').append("<a class='locMap'>Location on the map</a>");
    $('.locMap').attr("href", "https://www.bing.com/maps?cp=" + number1 + "~" + number2);
}
 
function geoError(errorObj) {

    var errorMessage;

    switch(errorObj.code){
        case errorObj.PERMISSION_DENIED :
            errorMessage = "No permission to find a location!";
         break;

         case errorObj.POSITION_UNAVAILABLE :
            errorMessage = "No network access!";
         break;
         
         case errorObj.TIMEOUT :
            errorMessage = "Timeout!";
            break;
    }
     $('#positionOutput').html('<strong>Error occurred: </strong>' + errorMessage);
}

$('#findPosition').on("click",function(){

$('#positionOutput').html("Wait...");

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);


});
})();