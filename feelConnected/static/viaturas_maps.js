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
  //Criação das torres
  var torre1 = {lat: -23.56551, lng: -46.65548};
  var torre2 = {lat: -23.55935, lng: -46.6374};
  var torre3 = {lat: -23.57426, lng: -46.66715};
  var torre4 = {lat: -23.57749, lng: -46.64046};

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

  var json = [{
    "Nazev": "Pobocka 1",
    "Mesto": "Praha",
    "Ulice": "Nejvetsi 35\/352",
    "PSC": "12345",
    "Web": "www.praha.cz",
    "Lat": "50.0596696",
    "Long": "14.4656239"
  }, {
    "Nazev": "Pobocka 2",
    "Mesto": "Brno",
    "Ulice": "Nejmensi 384\/64",
    "PSC": "54321",
    "Web": "www.brno.cz",
    "Lat": "49.2020701",
    "Long": "16.5779606"
  }];

  var center = new google.maps.LatLng(-23.837395, -46.5309157);
  var mapOptions = {
    zoom: 12,
    center: center,
    styles: mapConfigs
  }

  //Instância do Mapa, centrado na torre 1
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

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

}
