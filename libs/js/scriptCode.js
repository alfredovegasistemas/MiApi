$(document).ready(function() {

	$("#t1").hide();
	$("#t2").hide();
	$("#t3").hide();



});
	
	
	$('#btnRun').click(function() {

		$("#t2").hide();
		$("#t3").hide();
	    $("#t1").show();
	  	// alert( $('#latitud').val());
		// alert( $('#longitud').val());



		$.ajax({
			url: "libs/php/getCountryCode.php",
			type: 'POST',
			dataType: 'json',
			data: {

				lat: $('#latitud').val(),
				lng: $('#longitud').val()

			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtLanguages').html(result['data']['languages']);
					$('#txtDistance').html(result['data']['distance']);
					$('#txtCountryCode').html(result['data']['countryCode']);
					$('#txtCountryName').html(result['data']['countryName']);
					
				
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnRun2').click(function() {
	$("#t1").hide();
	$("#t3").hide();
	 $("#t2").show();

	//  alert( $('#norte').val());
	//  alert( $('#sur').val());
	//  alert( $('#este').val());
	//  alert( $('#oeste').val());


		$.ajax({
			url: "libs/php/getEarthquakes.php",
			type: 'POST',
			dataType: 'json',
			data: {

			north: $('#norte').val(),
			south: $('#sur').val(),
			east: $('#este').val(),
			west: $('#oeste').val()

			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
					
					$('#txtDatetime').html(result['data'][0]['datetime']);					
					$('#txtDepth').html(result['data'][0]['depth']);
					$('#txtSrc').html(result['data'][0]['src']);
					$('#txtEqid').html(result['data'][0]['eqid']);
					$('#txtMagnitude').html(result['data'][0]['magnitude']);
					$('#txtLat').html(result['data'][0]['lat']);
										
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});


	$('#btnRun3').click(function() {
		$("#t1").hide();
		$("#t2").hide();
		$("#t3").show();
   
	  	alert( $('#latitudw').val());
		alert( $('#longitudw').val());
	
   
		   $.ajax({
			   url: "libs/php/getWeather.php",
			   type: 'POST',
			   dataType: 'json',
			   data: {
   
					latw: $('#latitudw').val(),
					longw: $('#longitudw').val()
			   },
			   success: function(result) {
   
				   console.log(JSON.stringify(result));
   
				   if (result.status.name == "ok") {
					alert("ok")
					   
						$('#r3Clouds').html(result['data']['clouds']);
						$('#r3cloudsCode').html(result['data']['cloudsCode']);				
					   $('#r3CountryCode').html(result['data']['countryCode']);
					   $('#r3Temperature').html(result['data']['temperature']);
					   $('#r3Humidity').html(result['data']['humidity']);
					   $('#r3StationName').html(result['data']['stationName']);
					
										   
				   }
			   
			   },
			   error: function(jqXHR, textStatus, errorThrown) {
				   // your error code
			   }
		   }); 
	   
	   });


	   $(window).on('load', function() {
		if ($('#preloader').length) {
			$('#preloader').delay(1000).fadeOut('slow', function() {
				$(this).remove();
			});
		}
	});