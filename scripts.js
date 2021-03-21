let beolvasas = 0;

$('#noveles').click(function () {
     beolvasas++;
    $('#szamlalo').text(beolvasas);
    
});


$('#csokkentes').click(function () {
    beolvasas--;
   $('#szamlalo').text(beolvasas);
   
});