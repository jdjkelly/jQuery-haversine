(function( $ ) {
  $.fn.haversine = function(lat1,lng1,lat2,lng2,unit) {
    unit = unit || 'km'
    // Converts degrees to Rads

  if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }

	var R = '';
  if (unit == 'km') {
    R = 6371; // km
  } else {
    R = 3959; // mi
  }
	var dLat = (parseFloat(lat2)-parseFloat(lat1)).toRad();
	var dLon = (parseFloat(lng2)-parseFloat(lng1)).toRad();
	var lat1 = parseFloat(lat1).toRad();
	var lat2 = parseFloat(lat2).toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;

	return d;

  };
})( jQuery );
