function abrirModal(torre) {
  $(document).ready(function() {
    if(torre == 't1') {
      $("#t1").modal('show');
    } else if(torre == 't2') {
      $("#t2").modal('show');
    } else if(torre == 't3') {
      $("#t3").modal('show');
    } else if(torre == 't4') {
      $("#t4").modal('show');
    }
  })

}

function initMap() {
  var mapConfigs = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

  var viaturas = [
    {
      "Nome": "Viatura V001",
      "Motorista": "Felipe Matos",
      "Ativo": true,
      "Lat": "-23.813400",
      "Long": "-46.585210"
    },
    {
      "Nome": "Viatura V002",
      "Motorista": "Gabriel Lemos",
      "Ativo": true,
      "Lat": "-23.822758",
      "Long": "-46.582238"
    },
  ];

  var center = new google.maps.LatLng(-23.837395, -46.5309157);
  var mapOptions = {
    zoom: 12,
    center: center,
    styles: mapConfigs
  }

  //Instância do Mapa, centrado na torre 1
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  for (i = 0; i < viaturas.length; i++) {
    var Nome = viaturas[i].Nome;
    var Motorista = viaturas[i].Motorista;
    var Ativo = viaturas[i].Ativo;
    var Lat = viaturas[i].Lat;
    var Long = viaturas[i].Long;
    var contentString = "<b>" + Nome + "</b><br>" + Motorista + "<br>" + Ativo + "<br>";
    var latLng = new google.maps.LatLng(Lat, Long);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', (function(marker, contentString) {
      return function() {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      }
    })(marker, contentString));
    google.maps.event.addListener(marker, 'mouseover', (function(marker, contentString) {
      return function() {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      }
    })(marker, contentString));
    google.maps.event.addListener(marker, 'mouseout', (function(marker, contentString) {
      return function() {
        infowindow.close();
      }
    })(marker, contentString));

  }


/*
  //Instância de todos os marcadores
  var torre1marker = new google.maps.Marker({position: torre1, map: map, title: 'Torre 1'});
  var torre2marker = new google.maps.Marker({position: torre2, map: map, title: 'Torre 2'});
  var torre3marker = new google.maps.Marker({position: torre3, map: map, title: 'Torre 3'});
  var torre4marker = new google.maps.Marker({position: torre4, map: map, title: 'Torre 4'});

  //Criação das janelas de informação
  var info_content1 = '<h1>Torre de Sensores 1</h1><br><p><b>Endereço: </b>R. Pamplona - Jardim Paulista, São Paulo - SP, 01405-001</p>'
  var infowindow1 = new google.maps.InfoWindow({content: info_content1});
  var info_content2 = '<h1>Torre de Sensores 2</h1><br><p><b>Endereço: </b>Av. da Liberdade - Liberdade, São Paulo - SP, 01503-001</p>'
  var infowindow2 = new google.maps.InfoWindow({content: info_content2});
  var info_content3 = '<h1>Torre de Sensores 3</h1><br><p><b>Endereço: </b>Av. Brasil - Jardim America, São Paulo - SP, 01431-000</p>'
  var infowindow3 = new google.maps.InfoWindow({content: info_content3});
  var info_content4 = '<h1>Torre de Sensores 4</h1><br><p><b>Endereço: </b>Rua Vergueiro - Vila Mariana, São Paulo - SP, 04101-000</p>'
  var infowindow4 = new google.maps.InfoWindow({content: info_content4});

  //Eventos de Hover para informações extras:
  google.maps.event.addListener(torre1marker, 'mouseover', function() {
    infowindow1.open(map, this);
  })
  google.maps.event.addListener(torre1marker, 'mouseout', function() {
    infowindow1.close();
  })

  google.maps.event.addListener(torre2marker, 'mouseover', function() {
    infowindow2.open(map, this);
  })
  google.maps.event.addListener(torre2marker, 'mouseout', function() {
    infowindow2.close();
  })

  google.maps.event.addListener(torre3marker, 'mouseover', function() {
    infowindow3.open(map, this);
  })
  google.maps.event.addListener(torre3marker, 'mouseout', function() {
    infowindow3.close();
  })

  google.maps.event.addListener(torre4marker, 'mouseover', function() {
    infowindow4.open(map, this);
  })
  google.maps.event.addListener(torre4marker, 'mouseout', function() {
    infowindow4.close();
  })

  //Eventos de Click para abrir modal de Sensores + Câmera
  google.maps.event.addListener(torre1marker, 'click', function() {
    abrirModal('t1')
  })
  google.maps.event.addListener(torre2marker, 'click', function() {
    abrirModal('t2')
  })
  google.maps.event.addListener(torre3marker, 'click', function() {
    abrirModal('t3')
  })
  google.maps.event.addListener(torre4marker, 'click', function() {
    abrirModal('t4')
  })
*/
}
