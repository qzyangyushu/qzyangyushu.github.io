$(function() {
               
            var LocsA = [
                {
                    lat: 40.740178,
                    lon: -74.190194,
                    title: 'Property 1',
                    html: ['<p><i class="ion-ios-location-outline"></i>1149 Cuduw Square</p>',
                           '<a href="#"><i class="ion-ios-telephone-outline"></i> (373) 318-2847</a>',
                           '<a href="#"><i class="ion-ios-email-outline"></i> unias@sodoncif.gov</a>'
                           
                        ].join(''),
                    animation: google.maps.Animation.BOUNCE,
                    icon: 'assets/img/icon/place.png'
                },
                
                
            ];
            new Maplace({
                locations: LocsA,
                controls_on_map: true,
                map_options: {
                    zoom: 13,
                    scrollwheel: false,
                    stopover: true
                }
            }).Load();

        });

