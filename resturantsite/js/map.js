function singleMap() {
    //   marker ------------------
    var myLatLng = {
        lng: $('#singleMap').data('longitude'),
        lat: $('#singleMap').data('latitude'),
    }; 
    //  map settings ------------------	
    var single_map = new google.maps.Map(document.getElementById('singleMap'), {
        zoom: 12,
        center: myLatLng,
        scrollwheel: false,
        zoomControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        navigationControl: false,
        streetViewControl: false,
        styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });
	var marker = new google.maps.Marker({
		position: myLatLng, 
		map: single_map, 
		icon: 'images/marker.png',
		draggarble: false,
		title: firstInit3	
	});	
	function changeMarkerPos(lat, lon){
		myLatLng = new google.maps.LatLng(lat, lon)
		marker.setPosition(myLatLng);
		single_map.panTo(myLatLng);
	}	
 		var fim = $(".first_init_marker"),
		  firstInit3 = fim.data('markertitle'),
		  firstInit4 = fim.data('markermail'),
		  firstInit5 = fim.data('markerphone'),
		  firstInit6 = fim.data('markeradress');
		$(".location-content-title").text(firstInit3);
 		$(".lc_mail").attr("href", "mailto:" + firstInit4).text(firstInit4);	
 		$(".lc_phone").attr("href", "tel:" + firstInit5).text(firstInit5);		
 		$(".lc_adress").attr("href", "https://maps.google.com/maps?q=" +firstInit6+"'").text(firstInit6);		
	$(".map-link").on("click", function (a) {
		a.preventDefault();
		$(".map-link").removeClass("ml_act");
		var tdInit = $(this).data('linklat');
		var tdInit2 = $(this).data('linklong');
		var tdInit3 = $(this).data('markertitle');
		var tdInit4 = $(this).data('markermail');
		var tdInit5 = $(this).data('markerphone');
		var tdInit6 = $(this).data('markeradress');
 		marker.setTitle(tdInit3);
		$(this).addClass("ml_act");
		changeMarkerPos(tdInit, tdInit2);
		$(".map-links_tabs-title").removeClass("ml_act_title");
		$(".map-links_tabs").fadeOut(400);
		$(".location-content-title").text(tdInit3);
 		$(".lc_mail").attr("href", "mailto:" + tdInit4).text(tdInit4);	
 		$(".lc_phone").attr("href", "tel:" + tdInit5).text(tdInit5);		
 		$(".lc_adress").attr("href", "https://maps.google.com/maps?q=" +tdInit6+"'").text(tdInit6);		
		$(".lc_mail span").text(tdInit4);			
	});
	$(".map-links_tabs-title").on("click", function () {
		$(this).toggleClass("ml_act_title");
 		$(".map-links_tabs").fadeToggle(400);
	});	
    var scrollEnabling = $('.scrollContorl');
    $(scrollEnabling).click(function (e) {
        e.preventDefault();
        $(this).toggleClass("enabledsroll");
        if ($(this).is(".enabledsroll")) {
            single_map.setOptions({
                'scrollwheel': true
            });
        } else {
            single_map.setOptions({
                'scrollwheel': false
            });
        }
    });
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, single_map);
    function ZoomControl(controlDiv, single_map) {
        zoomControlDiv.index = 1;
        single_map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);
        controlDiv.style.padding = '5px';
        var controlWrapper = document.createElement('div');
        controlDiv.appendChild(controlWrapper);
        var zoomInButton = document.createElement('div');
        zoomInButton.className = "mapzoom-in";
        controlWrapper.appendChild(zoomInButton);
        var zoomOutButton = document.createElement('div');
        zoomOutButton.className = "mapzoom-out";
        controlWrapper.appendChild(zoomOutButton);
        google.maps.event.addDomListener(zoomInButton, 'click', function () {
            single_map.setZoom(single_map.getZoom() + 1);
        });
        google.maps.event.addDomListener(zoomOutButton, 'click', function () {
            single_map.setZoom(single_map.getZoom() - 1);
        });
    }
}
var single_map = document.getElementById('singleMap');
if (typeof (single_map) != 'undefined' && single_map != null) {
    google.maps.event.addDomListener(window, 'load', singleMap);
}