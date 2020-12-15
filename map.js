var pennsylvaniaData = [
  [42.252649, -79.76278],
  [42.000709, -79.76278],
  [42.000709, -75.35932],
  [41.863786, -75.249781],
  [41.869263, -75.173104],
  [41.754247, -75.052611],
  [41.60637, -75.074519],
  [41.436584, -74.89378],
  [41.431108, -74.740426],
  [41.359907, -74.69661],
  [41.288707, -74.828057],
  [41.179168, -74.882826],
  [40.971045, -75.134765],
  [40.866983, -75.052611],
  [40.691721, -75.205966],
  [40.576705, -75.195012],
  [40.543843, -75.069042],
  [40.417874, -75.058088],
  [40.215227, -74.773287],
  [40.127596, -74.82258],
  [39.963288, -75.129289],
  [39.88661, -75.145719],
  [39.804456, -75.414089],
  [39.831841, -75.616736],
  [39.722302, -75.786521],
  [39.722302, -79.477979],
  [39.722302, -80.518598],
  [40.636951, -80.518598],
  [41.978802, -80.518598],
  [41.978802, -80.518598],
  [42.033571, -80.332382],
  [42.269079, -79.76278],
  [42.252649, -79.76278],
];

var map = L.map("mapid", {}).setView([41.2033, -77.1945], 6);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://publicherald.org/">Public Herald</a>',
}).addTo(map);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a">Adityaa Magesh Kumar</a>',
}).addTo(map);

var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [0, 10, 20, 50],
    colors = ["#FF0000", "#FFA500", "#FFFF00", "#808080"];
  labels = [
    "Waste Water Treatment Plant accepts leachate from landfills with unconventional oil and gas fracking waste, and always discharges to waterways",
    "Facility treats or accepts pretreated unconventional oil and gas fracking waste, and in most cases discharges to waterways",
    "Not directly receiving unconventional waste; potential areas of pollution from sewage plants who receive some form of fossil fuel waste",
    "No longer receives unconventional oil & gas fracking waste & discharges to waterway, but did at one time",
  ];

  div.innerHTML +=
    "<div style='font-size: 18px; text-align: center; color: " +
    "#123ABC" +
    "'><b>Legend</br></div><br>";
  div.innerHTML +=
    "<div style='font-size: 14px'><b>Landfills Accepting Fracking Waste</br></div><br>";
  div.innerHTML +=
    '<i style="width: 12px; height: 12px; border: 2px solid #FF0000; background:' +
    "#000000" +
    '"></i> ' +
    "Data point confirmed by Department of Environmental Protection" +
    "<br>";
  div.innerHTML +=
    '<i style="width: 12px; height: 12px; border: 2px solid #FFFF00; background:' +
    "#000000" +
    '"></i> ' +
    "Data point not yet confirmed by DEP" +
    "<br>";
  div.innerHTML +=
    "<div style='font-size: 14px'><b>Discharge Sites</br></div><br>";
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="width: 12px; height: 12px; border: 1px solid #000; border-radius: 50%; background:' +
      colors[i] +
      '"></i> ' +
      labels[i] +
      "<br>";
  }
  div.innerHTML +=
    "<br><div style='font-size: 14px'><b>Drinking Water Supplies</br></div><br>";
  div.innerHTML +=
    '<i style="width: 8px; height: 8px; border-radius: 50%; background:' +
    "#3776E9" +
    '"></i> ' +
    "Drinking Water Supplies<br>";
  return div;
};

legend.addTo(map);

var pennsylvaniaPolyline = L.polyline(pennsylvaniaData, {
  color: "#000000",
  weight: 3,
}).addTo(map);
map.fitBounds(pennsylvaniaPolyline.getBounds());

//Discharge Sites
var redCircle = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='redCircle'></div>",
});

var orangeCircle = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='orangeCircle'></div>",
});

var yellowCircle = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='yellowCircle'></div>",
});

var greyCircle = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='greyCircle'></div>",
});

L.marker([41.0151961, -80.4454356], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MAHONING TWP WWTP</b><br>MAHONING TWP WWTP<br> Permit #PA0240095<br>3692 West State Street<br>Edinburg, PA 16116<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Carbon Limestone Landfill - BFI with well drilling waste"
  );

L.marker([40.2054677, -80.2609002], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>EAST WASHINGTON JA STP</b><br>EAST WASHINGTON JA STP<br> Permit #PA0026212<br>102 Arden Station Road<br>Washington, PA 15301<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Arden Landfill with well drilling waste"
  );

L.marker([39.9158459, -79.7199433], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>UNIONTOWN STP</b><br>UNIONTOWN STP<br> Permit #PA0027219<br>90 N View Ln<br>Uniontown, PA 15401<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Chestnut Valley Landfill with well drilling waste"
  );

L.marker([40.2314224, -79.5976529], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MAWC - NEW STANTON STP</b><br>MAWC - NEW STANTON STP<br> Permit #PA0038181<br>124 Park and Pool Rd<br>New Stanton, PA 15672<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Greenridge Reclamation Landfill with well drilling waste"
  );

L.marker([40.4963115, -80.2024567], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MOON TWP MA STP</b><br>MOON TWP MA STP<br> Permit #PA0205991<br>1700 Beaver Grade Rd<br>Coraopolis, PA 15108<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Imperial Landfill with well drilling waste"
  );

L.marker([40.277189, -79.88226], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>ELIZABETH BORO WWTP</b><br>ELIZABETH BORO WWTP<br> Permit #PA0028436<br>1 Locust St<br>Elizabeth, PA 15037<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Kelly Run Sanitation Landfill with well drilling waste"
  );

L.marker([40.3642151, -78.9515802], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>JOHNSTOWN STP</b><br>JOHNSTOWN STP<br> Permit #PA0026034<br>241 Asphalt Rd<br>Johnstown, PA 15906<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Laurel Highland Landfill and Shade Landfill with well drilling waste"
  );

L.marker([40.2871606, -79.9904223], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>PINEY FORK STP</b><br>PINEY FORK STP<br> Permit #PA0027618<br>3100 Piney Fork Rd<br>South Park, PA 15129<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from South Hills Landfill with well drilling waste"
  );

L.marker([40.0026785, -79.0428776], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>SCI LAUREL HIGHLANDS STP</b><br>SCI LAUREL HIGHLANDS STP<br> Permit #PA0030406<br>5706 Glades Pike (See coordinates for exact location)<br>Somerset, PA 15501<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Mostoller Landfill with well drilling waste"
  );

L.marker([40.1283077, -79.8755117], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>BELLE VERNON STP/ Rostraver TWP Sewage Authority</b><br>BELLE VERNON STP/ Rostraver TWP Sewage Authority<br> Permit #PA0092355<br>10 Main Street<br>Belle Vernon, PA 15012<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Tervita Sanitary Landfill with well drilling waste"
  );

L.marker([40.3395946, -79.7204616], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>WWMA (Western Westmoreland Municipal Authority)  STP /Brush Creek WWTP</b><br>WWMA (Western Westmoreland Municipal Authority)  STP /Brush Creek WWTP<br> Permit #PA0027570<br>12441 PA-993<br>North Huntington, PA 15642<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Valley Landfill with well drilling waste"
  );

L.marker([41.0063984, -76.863301], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MILTON REGIONAL SEWER AUTHORITY</b><br>MILTON REGIONAL SEWER AUTHORITY<br> Permit #PA0020273<br>5585 PA-405<br>Milton, PA 17847<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate with well drilling waste"
  );

L.marker([40.984217, -76.8788129], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>KELLY TOWNSHIP MA</b><br>KELLY TOWNSHIP MA<br> Permit #PA0028681<br>405 Winter Farm Ln<br>Lewisburg, PA 17837<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G  WW directly but accepts landfill leachate with well drilling waste"
  );

L.marker([41.1173242, -76.5281848], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MILLVILLE BOROUGH /Myers Environmental Services</b><br>MILLVILLE BOROUGH /Myers Environmental Services<br> Permit #PA0024091<br>360 S State St # D<br>Millville, PA 17846<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from White Pines Landfill with well drilling waste"
  );

L.marker([40.1464665, -79.9025628], {
  icon: redCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CHARLEROI WWTP</b><br>CHARLEROI WWTP<br> Permit #PA0026891<br>101 12th St<br>Charleroi, PA 15022<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Does not accept O&G WW directly but accepts landfill leachate from Mon Valley Landfill with well drilling waste"
  );

L.marker([40.1924459, -79.575678], {
  icon: orangeCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>RESERVED ENV SVC WASTE WATER TREATMENT FACILITY</b><br>RESERVED ENV SVC WASTE WATER TREATMENT FACILITY<br> Permit #PA0254185<br>1119 OLD STATE ROUTE 119<br>MOUNT PLEASANT, PA 15666<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> Yes<br><br><b>Comments:</b> Facility has never dicharged."
  );

L.marker([40.8162871, -77.8992665999999], {
  icon: orangeCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>HYDRO RECOVERY - BRADFORD LP</b><br>HYDRO RECOVERY - BRADFORD LP<br> Permit #PA0232823<br>1975 Waddle Road<br>State College, PA 16803<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> Yes<br><br><b>Comments:</b> "
  );

L.marker([41.2372053, -77.0088313999999], {
  icon: orangeCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>EUREKA RESOURCES LLC</b><br>EUREKA RESOURCES LLC<br> Permit #PA0232351<br>419 2nd Street<br>Williamsport, PA 17701<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> Yes<br><br><b>Comments:</b> "
  );

L.marker([41.2447167, -76.9894626], {
  icon: orangeCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>WILLIAMSPORT SAN AUTH CENTRAL STP</b><br>WILLIAMSPORT SAN AUTH CENTRAL STP<br> Permit #PA0027057<br>601 E JEFFERSON LANE<br>WILLIAMSPORT, PA 17701-5340<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> Yes<br><br><b>Comments:</b> Is accepting pretreated wastewater from Eureka Resources"
  );

L.marker([41.2064643, -77.2539541], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>JERSEY SHORE BOROUGH SEWAGE TREATMENT PLANT</b><br>JERSEY SHORE BOROUGH SEWAGE TREATMENT PLANT<br> Permit #PA0028665<br>265 N PENNSYLVANIA AVE<br>JERSEY SHORE, PA 17740<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> No Comments"
  );

L.marker([40.967413, -80.38641], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>NEW CASTLE CITY SANI AUTH LAWRENCE CNTY</b><br>NEW CASTLE CITY SANI AUTH LAWRENCE CNTY<br> Permit #PA0027511<br>512 MONTGOMERY AVE<br>NEW CASTLE, PA 16101-3815<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Not directly accepting O&G wastewater. Covanta is an industrial user that has historically accepted O&G wastewater and discharged to New Castle, but not currently accepting."
  );

L.marker([40.4765652, -80.0428637999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>ALCOSAN SEWAGE SYSTEM</b><br>ALCOSAN SEWAGE SYSTEM<br> Permit #PA0025984<br>3300 PREBLE AVE<br>PITTSBURGH, PA 15233<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Not aware of current acceptance of O&G wastewater."
  );

L.marker([40.3531958, -79.8721649], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>MCKEESPORT SEWAGE TREATMENT PLANT</b><br>MCKEESPORT SEWAGE TREATMENT PLANT<br> Permit #PA0026913<br>100 ATLANTIC AVE<br>MCKEESPORT, PA 15132<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([40.812424, -80.081896], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>SENECA LDFL INC</b><br>SENECA LDFL INC<br> Permit #PA0210196<br>421 HARTMANN RD<br>EVANS CITY, PA 16033<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> CWT but no longer accepts O&G wastewater."
  );

L.marker([40.6770469999999, -79.1861054], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CREEKSIDE TREATMENT FACILITY</b><br>CREEKSIDE TREATMENT FACILITY<br> Permit #PA0095443<br>5035 ROUTE 110, CREEKSIDE, PA 15732<br>CREEKSIDE, PA 15732<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([41.6244394, -79.6545891999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>TITUSVILLE WWTP</b><br>TITUSVILLE WWTP<br> Permit #PA0036650<br>301 E INDUSTRIAL DRIVE<br>Titusville, PA 16354<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Receives conventional O&G indirectly through GCI Water Solutions, LLC pretreatment facility"
  );

L.marker([41.4618660999999, -79.6897807], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>FLUID RECOVERY SERVICE ROUSEVILLE FACILITY</b><br>FLUID RECOVERY SERVICE ROUSEVILLE FACILITY<br> Permit #PA0263516<br>587 SR 8<br>OIL CITY, PA <br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Facility not yet built. No WQM Part II permit application submitted."
  );

L.marker([41.4114874, -79.8520818], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    '<b>BIG SANDY PROJ 5 TIMBERLINE TREATMENT FACILITY</b><br>BIG SANDY PROJ 5 TIMBERLINE TREATMENT FACILITY<br> Permit #PA0222011<br>PO BOX 269<br>CRANBERRY TOWNSHIP, PA 16323-0269<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Not operating.  NPDES permit has expired.  Owner to send letter requesting official ""termination"" of permits.'
  );

L.marker([41.1766444, -79.4417555], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CAES AT PINEY CREEK POWER PLANT</b><br>CAES AT PINEY CREEK POWER PLANT<br> Permit #PA0103632 (CANCELLED)<br>428 POWER LN<br>CLARION, PA <br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> NPDES PERMIT cancelled. WQM permits remain with the facility anticipating the sale and transfer of the facilities to a new operator (New NPDES permit will be required at that time)."
  );

L.marker([40.4581839, -79.388615], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>TUNNELTON LIQUIDS TREATMENT FACILITY</b><br>TUNNELTON LIQUIDS TREATMENT FACILITY<br> Permit #PA0091472<br>671 HOGUE DRIVE<br>SALTSBURG, PA 15681<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Facility is closed"
  );

L.marker([40.6436905, -79.3572868999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CROOKED CREEK TRTMT FAC</b><br>CROOKED CREEK TRTMT FAC<br> Permit #PA0253588<br>184 WALNUT DRIVE<br>SHELOCTA, PA 15774<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Not a CWT.  Facility is treating coal bed methane (waste is piped to treatment facility from wells)"
  );

L.marker([40.4654885, -79.2320368], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>HOWARD TREATMENT FACILITY</b><br>HOWARD TREATMENT FACILITY<br> Permit #PA0206075<br>2130 CAMPBELLS MILLS ROAD<br>BLAIRSVILLE, PA 15717<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Not a CWT.  Facility is treating coal bed methane (waste is piped to treatment facility from wells)"
  );

L.marker([40.6770469999999, -79.1861054], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CREEKSIDE TREATMENT FACILITY</b><br>CREEKSIDE TREATMENT FACILITY<br> Permit #PA0095443<br>5035 ROUTE 110, CREEKSIDE, PA 15732<br>CREEKSIDE, PA 15732<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([40.482505, -79.1712989999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>FLUID RECOVERY SERVICE JOSEPHINE FACILITY</b><br>FLUID RECOVERY SERVICE JOSEPHINE FACILITY<br> Permit #PA0095273<br>931 BELLS MILLS ROAD<br>JOSEPHINE, PA 15750<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([41.09291, -78.895895], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>REYNOLDSVILLE SEWAGE TREATMENT PLANT</b><br>REYNOLDSVILLE SEWAGE TREATMENT PLANT<br> Permit #PA0028207<br>149 5TH STREET<br>REYNOLDSVILLE, PA 15851<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([40.3642151, -78.9515802], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>DORNICK PT SEWAGE TREATMENT PLANT</b><br>DORNICK PT SEWAGE TREATMENT PLANT<br> Permit #PA0026034<br>241 ASPHALT ROAD<br>JOHNSTOWN, PA 15906<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([41.0250744, -78.4016858999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>CLEARFIELD MUNICIPAL SEWAGE TREATMENT PLANT</b><br>CLEARFIELD MUNICIPAL SEWAGE TREATMENT PLANT<br> Permit #PA0026310<br>735 BEAUTY DR<br>CLEARFIELD, PA 16830<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([41.3076514, -78.649643], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>ADVANCED DSPL SVC GREENTREE LDFL LLC</b><br>ADVANCED DSPL SVC GREENTREE LDFL LLC<br> Permit #PA0103446<br>635 TOBY RD<br>KERSEY, PA 15846<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> CWT but no longer accepts O&G wastewater."
  );

L.marker([41.9888021999999, -78.6286885], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>BRADFORD STP</b><br>BRADFORD STP<br> Permit #PA0026379<br>410 SEAWARD AVENUE<br>Bradford, PA 16701<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> Receives conventional O&G indirectly through Advanced Water Systems, LLC pretreatment facility"
  );

L.marker([41.908414, -78.2045170999999], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>JJ BUCHER PRODUCING CORP</b><br>JJ BUCHER PRODUCING CORP<br> Permit #PA0112623<br>2568 BELLS RUN RD<br>Shinglehouse, PA 16748<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([40.8385873, -76.8245164], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>SUNBURY GENERATION WASTE WATER TRMT FAC</b><br>SUNBURY GENERATION WASTE WATER TRMT FAC<br> Permit #PA0008451<br>2384 NORTH OLD TRAIL RD<br>SHAMOKIN DAM, PA <br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Inactive and decommissioned"
  );

L.marker([41.7001757, -75.6739442], {
  icon: yellowCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>FLUID RECOVERY SERVICES LLC</b><br>FLUID RECOVERY SERVICES LLC<br> Permit #PA0275883<br>5124 STATE ROUTE 92<br>Kingsley, PA 18826<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Proposed - intends to accept both conventional and unconventional O&G wastewater"
  );

L.marker([41.8399047, -79.1578979], {
  icon: greyCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>WASTE TREATMENT CORPORATION</b><br>WASTE TREATMENT CORPORATION<br> Permit #PA0102784<br>341 WEST HARMAR STREET<br>WARREN, PA x<br><b>Centralized Waste Treatment facility?</b> Yes<br><b>Active site?</b> No<br><b>Accepting Conventional O&G waste?</b> -<br><b>Accepting Unconventional O&G waste?</b> -<br><br><b>Comments:</b> Not currently discharging.  Ceased discharge around the end of November 2016 with no plans to resume discharging at the present time."
  );

L.marker([41.41885, -78.750438], {
  icon: greyCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>RIDGWAY BOROUGH SEWAGE TREATMENT PLANT</b><br>RIDGWAY BOROUGH SEWAGE TREATMENT PLANT<br> Permit #PA0023213<br>39149 Portland Mills Rd<br>RIDGWAY, PA 15853<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

L.marker([40.9421396, -78.9986867], {
  icon: greyCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>PUNXSUTAWNEY BORO SEWAGE TREATMENT PLANT</b><br>PUNXSUTAWNEY BORO SEWAGE TREATMENT PLANT<br> Permit #PA0020346<br>342 WATER STREET EXT<br>PUNXSUTAWNEY, PA 15767<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> No<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> NOT Accepting Oil & Gas Wastewater"
  );

L.marker([41.2532059, -78.8000821999999], {
  icon: greyCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>BROCKWAY AREA WASTEWATER TREATMENT PLANT</b><br>BROCKWAY AREA WASTEWATER TREATMENT PLANT<br> Permit #PA0028428<br>70 INDUSTRIAL PARK<br>BROCKWAY, PA 15824<br><b>Centralized Waste Treatment facility?</b> No<br><b>Active site?</b> Yes<br><b>Accepting Conventional O&G waste?</b> Yes<br><b>Accepting Unconventional O&G waste?</b> No<br><br><b>Comments:</b> "
  );

//Drinking Water Supplies
var blueCircle = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='blueCircle'></div>",
});

L.marker([40.5324105, -80.1394312], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Aleppo Township Authority</b><i> on the Ohio river</i><br>100 North Drive, Suite 2, Sewickley, PA 15143<br><br><b>Facility Descriptions: </b>Our water is purchased from West View Water Authority, which withdraws its rawl water from the Ohio River and occasionally from 13 wells located on Davis and Neville Islands in the Ohio River,. The Authority also uses the Borough of Sewickley Water Authority as an emergency water source.<br><br><b>Confidence Consumer Report, </b>where available: https://www.aspinwallpa.com/water-quality-report-<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4942047, -79.85998], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Blawnox Boro Water Dept</b><i> on the Alleghany river</i><br>376 Freeport Road, Blawnox, PA 15238<br><br><b>Facility Descriptions: </b>Blawnox Borough purchases its water from Fox Chapel Authority (FCA), which in turn, purchases its water from Pittsburgh Water and Sewer Authority (PWSA). Our water is obtained by PWSA and is treated surface water from the Allegheny River. PWSA treats the water it obtains from the Allegheny River at the PWSA Water Treatment Plant, located on the north shore of the Allegheny River at the eight (8) mile marker directly across from the Waterworks Mall on Freeport Road.<br><br><b>Confidence Consumer Report, </b>where available: http://www.blawnox.com/2018WaterReport.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.6046887, -79.7392207], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Brackenridge Boro Water Dept</b><i> on the Alleghany river</i><br>1000 Brackenridge Ave # 1, Brackenridge, PA 15014<br><br><b>Facility Descriptions: </b>Our water source is the Allegheny River.<br><br><b>Confidence Consumer Report, </b>where available: https://brackenridgeboro.com/wp-content/uploads/2019/03/2018CCR.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.403948, -79.86853], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Braddock Boro Water Authority</b><i> on the Monongahela river</i><br>415 6th St, Braddock, PA 15104<br><br><b>Facility Descriptions: </b><br><br><b>Confidence Consumer Report, </b>where available: <br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5384634, -79.7978472], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Cheswick Boro Water Department</b><i> on the Alleghany river</i><br>220 S Atlantic Ave, Cheswick, PA 15024<br><br><b>Facility Descriptions: </b>The Borough purchased water from Harmar Water Authority/Harmar Township from January 1, 2018 through December 31, 2018. Harmar Water Authority’s sources of water are three wells that draw from the alluvial deposits in the Allegheny Valley Aquifer, a glacial deposit of sand and gravel along the present-day banks of the Allegheny River.<br><br><b>Confidence Consumer Report, </b>where available: https://www.cheswick.us/pdf9/221.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.516612, -80.15824], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Coraopolis Water and Sewage Authority</b><i> on the Ohio river</i><br>1301 4th Ave Suite 1, Coraopolis, PA 15108<br><br><b>Facility Descriptions: </b>Our primary water source is a well field composed of eight vertical wells approximately 65 feet deep located near the Ohio River in Coraopolis. Although our wells tap the non-artesian aquifer found in the alluvial deposits of the Ohio River, the wells were determined not to be under the direct influence of the river. We also purchase water from the Moon Township Municipal Authority (MTMA) to supply the higher elevations of the borough including Euclid Avenue and the top of Montour Street (Grace Street).<br><br><b>Confidence Consumer Report, </b>where available: http://coraopoliswater.org/2018-ccr.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4016603, -79.9030375], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Duquesne Water Dept</b><i> on the Alleghany river</i><br>1705 Maple Street, Homestead, PA 15120<br><br><b>Facility Descriptions: </b><br><br><b>Confidence Consumer Report, </b>where available: <br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5833608, -79.778321], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>East Deer TWP Water DPT</b><i> on the Alleghany river</i><br>927 Freeport Road, Creighton, PA 15030<br><br><b>Facility Descriptions: </b>East Deer Township purchases their water in bulk from Tarentum Borough... The source water is the Allegheny River which is a surface water supply.<br><br><b>Confidence Consumer Report, </b>where available: http://eastdeertownship.org/wp-content/uploads/2019/07/CCR-REPORT-2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5509547, -80.1911898], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Edgeworth Boro Municipal Authority</b><i> on the Ohio river</i><br>313 Beaver Rd, Sewickley, Pennsylvania 15143<br><br><b>Facility Descriptions: </b>Our water is purchased from the Ambridge Water Authority. The Ambridge Water Authority withdraws its raw water from a Service Creek Reservoir, a spring-fed reservoir.<br><br><b>Confidence Consumer Report, </b>where available: http://edgeworthwater.com/<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.6322823, -79.698801], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Fawn Frazer JT Water Authority</b><i> on the Alleghany river</i><br>10 Chevrolet Dr, Natrona Heights, PA 15065<br><br><b>Facility Descriptions: </b>Surface water purchased<br><br><b>Confidence Consumer Report, </b>where available: https://echo.epa.gov/detailed-facility-report?fid=PA5020076&sys=SDWIS#pane3PA5020076<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4937915, -79.870052], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Fox Chapel Authority</b><i> on the Alleghany river</i><br>255 Alpha Dr, Pittsburgh, PA 15238<br><br><b>Facility Descriptions: </b>Our water is purchased from Pittsburgh Water and Sewer Authority (PWSA) and is treated surface water from the Allegheny River.<br><br><b>Confidence Consumer Report, </b>where available: http://www.foxchapelwater.com/wp-content/uploads/2019/04/FCA-CCR-2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5411751, -79.820036], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Harmar Twp Municipal Authority</b><i> on the Alleghany river</i><br>Municipal Building, 701 Freeport Rd, Cheswick, PA 15024<br><br><b>Facility Descriptions: </b>The source of our water is three wells that draw from the alluvial deposits in the Allegheny Valley Aquifer, a glacial deposit of sand and gravel along the present day banks of Allegheny River.<br><br><b>Confidence Consumer Report, </b>where available: http://www.harmarwater.com/HarmarWater2018CCR.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.6239393, -79.7256873], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Harrison Township Water Authority</b><i> on the Alleghany river</i><br>1705 Freeport Rd, Natrona Heights, PA 15065<br><br><b>Facility Descriptions: </b>Our water source is the Allegheny River and our raw water intake is located at mile point 24 just above Lock No. 4.<br><br><b>Confidence Consumer Report, </b>where available: http://harrisontwpwater.com/sites/default/files/HTWACCR2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4963115, -80.2024567], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Moon Twp Municipal Authority</b><i> on the Ohio river</i><br>1700 Beaver Grade Rd, Coraopolis, PA 15108<br><br><b>Facility Descriptions: </b>The Moon Township Municipal Authority (MTMA) water supply is obtained from an alluvium deposit of sand and gravel in the flood plain of and beneath the Ohio River and from the Ohio River. A radial well, two vertical wells and a surface water intake are located along the southern bank of the Ohio River. <br><br><b>Confidence Consumer Report, </b>where available: http://moontma.com/wqr/waterreport2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5045183, -80.1033031], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Neville TWP Water Dept</b><i> on the Ohio river</i><br>5050 Grand Ave, Pittsburgh, PA 15225<br><br><b>Facility Descriptions: </b>Our water is purchased from West View Water Authority, which means our water is classified as source water.<br><br><b>Confidence Consumer Report, </b>where available: https://nevilletownship.us/wp-content/uploads/2019/05/2018-Annual-Drinking-Water-Consumer-Confidence-Report.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5224506, -79.8427606], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Oakmont Boro Water Authority</b><i> on the Alleghany river</i><br>721 Allegheny Ave, Oakmont, PA 15139<br><br><b>Facility Descriptions: </b>Our water source is surface water from the Allegheny River. The water is then treated at the Hulton Treatment Plant in Oakmont.<br><br><b>Confidence Consumer Report, </b>where available: http://www.oakmontwater.com/files/2018%20Oakmont%20Water%20Authority%20Report.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4150227, -79.9846711], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>PA Amer Water Co-Pittsburgh</b><i> on the Monongahela river</i><br>160 Sherman Ave, Mount Oliver, PA 15210<br><br><b>Facility Descriptions: </b>The Monongahela River is the sole source of supply for the Pittsburgh, McMurray, and Mon-Valley service areas. Pennsylvania American Water (PAW) maintains treatment facilities on the Monongahela River capable of processing a maximum of 110 million gallons of water per day (MGD).<br><br><b>Confidence Consumer Report, </b>where available: https://dnnh3qht4.blob.core.windows.net/portals/12/CCRs/greaterpgh_2017.pdf?sr=b&si=DNNFileManagerPolicy&sig=ADyarTOL7dL9A9Ym48SK17Sx3Djt8%2BulyKceOVpdB5c%3D<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4458274, -79.9918036], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Pittsburgh Water and Sewer Authority</b><i> on the Alleghany river</i><br>1200 Penn Ave, Pittsburgh, PA 15222<br><br><b>Facility Descriptions: </b>The source of water for the Authority is surface water from the Allegheny River which is designated for the protection of Warm Water Fishes (WWF) from Plum Creek to the confluence with the Monongahela River.<br><br><b>Confidence Consumer Report, </b>where available: http://www.depgreenport.state.pa.us/elibrary/GetDocument?docId=3366&DocName=PITTSBURGH%20WATER%20AND%20SEWER%20AUTHORITY.PDF%20%20%20%3Cspan%20style%3D%22color%3Ablue%3B%22%3E%3C%2Fspan%3E<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4742414, -79.9824277], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Reserve Twnship Water DPT</b><i> on the Alleghany river</i><br>33 Lonsdale St # 2, Pittsburgh, PA 15212<br><br><b>Facility Descriptions: </b>PWSA<br><br><b>Confidence Consumer Report, </b>where available: https://reservetwp.com/wp-content/uploads/2019/06/CCR-2018-Report.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4258801, -80.1116693], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Robinson TWP Municipal Authority</b><i> on the Ohio river</i><br>4200 Campbells Run Rd, Pittsburgh, PA 15205<br><br><b>Facility Descriptions: </b>MATR obtains its water supply from the back channel of the Ohio River at a point 12,000 feet downstream of the Emsworth Dam and 200 feet upstream from the confluence of Moon Run and the Ohio River. <br><br><b>Confidence Consumer Report, </b>where available: https://www.robinsonwater.com/sites/default/files/2018_-_consumer_confidence_report_0.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5381912, -80.1797471], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Sewickley Boro Water Authority</b><i> on the Ohio river</i><br>601 Thorn St # 1, Sewickley, PA 15143<br><br><b>Facility Descriptions: </b>Sewickley Water Authority obtains its raw water from 3 sources: a crib intake which withdraws ground water from under the Ohio River, and Well #1 and Well #2 which are both located near Ohio River Boulevard.<br><br><b>Confidence Consumer Report, </b>where available: https://s3.amazonaws.com/dayoneweb/667/ccr2017.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5371548, -79.7833095], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Springdale Boro Water DPT</b><i> on the Alleghany river</i><br>600 Remaley St, Springdale, PA 15144<br><br><b>Facility Descriptions: </b>Our water sources are two municipal owned wells, which draw from the Springdale Borough Sand & Gravel Outwash Aquifer, located in the well-field adjacent to the water treatment plant.<br><br><b>Confidence Consumer Report, </b>where available: https://docs.wixstatic.com/ugd/40f1fe_0566ab8677a947d4ab76888fcb01ba63.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.6006958, -79.751941], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Tarentum Boro Water DPT</b><i> on the Alleghany river</i><br>318 E 2nd Ave, Tarentum, PA 15084<br><br><b>Facility Descriptions: </b>Our water source is treated surface water from the Allegheny River. <br><br><b>Confidence Consumer Report, </b>where available: http://tarentumboro.com/wp-content/uploads/2019/05/2018-Annual-Drinking-Water-Quality-Report.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.3531958, -79.8721649], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>West County Municipal Auhtority - McKeesport</b><i> on the Monongahela river</i><br>100 Atlantic Ave, McKeesport, PA 15132<br><br><b>Facility Descriptions: </b>Youghiogheny River<br><br><b>Confidence Consumer Report, </b>where available: https://www.mawc.org/sites/default/files/ccr_reports/westmoreland_county_water_report_sweeney_system_0.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4570794, -79.8634495], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Wilkinsburg-Penn Joint Water Authority</b><i> on the Alleghany river</i><br>2200 Robinson Blvd, Pittsburgh, PA 15221<br><br><b>Facility Descriptions: </b>The WPJWA obtains its raw water from the Allegheny River at our Nadine Intake on Allegheny River Boulevard in Verona, PA. We are classified as a “surface water supply.”<br><br><b>Confidence Consumer Report, </b>where available: https://westviewwater.org/confidence-report-5/<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.5387261, -76.9620058], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Millersburg Water Authority</b><i> on the Susquehanna river</i><br>101 West Street, Millersburg, PA 17061<br><br><b>Facility Descriptions: </b>Our water sources are nine drilled wells, seven mountain springs and one creek intake, all of which are located at the base of Berry Mountain in Upper Paxton Township.<br><br><b>Confidence Consumer Report, </b>where available: http://www.millersburgwater.com/CCR_2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.4697422, -76.9315216], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Halifax Area Water and Sewer Authority</b><i> on the Susquehanna river</i><br>203 ARMSTRONG STREET HALIFAX PA 17032 US<br><br><b>Facility Descriptions: </b>Your water comes from five mountain springs and three drilled wells, all located within Halifax Township. One well is behind Deppen Park, the other wells and springs are near Peters Mountain Road.<br><br><b>Confidence Consumer Report, </b>where available: https://nebula.wsimg.com/d0ebff1aa75613141136380e8877b273?AccessKeyId=88D96F3431ECECD3F390&disposition=0&alloworigin=1<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.3256609, -76.779949], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>SUEZ Pennsylvania Operations</b><i> on the Susquehanna river</i><br>6310 Allentown Blvd, Harrisburg, PA 17112<br><br><b>Facility Descriptions: </b>SUEZ owns and operates two water treatment plants serving the comapny's Harrisburg Operations area. The Sixth Street Water Treatment Plant draws raw surface water from the Susquehanna River, a watershed encompassing approximately 24,000 square miles, and from Stony Creek, with a watershed that encompasses 115 square miles.<br><br><b>Confidence Consumer Report, </b>where available: https://www.mysuezwater.com/sites/default/files/HarrisburgCCR2018.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.2812984, -76.8694627], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Capital Region Water</b><i> on the Susquehanna river</i><br>100 Pine Dr, Harrisburg, PA 17103<br><br><b>Facility Descriptions: </b>Your primary source of drinking water comes from the DeHart Dam and Reservoir, located 20 miles northeast of Harrisburg in the pristine Clarks Valley... The Susquehanna River is your secondary source and can be utilized in case of severe drought or emergency.<br><br><b>Confidence Consumer Report, </b>where available: https://capitalregionwater.com/wp-content/uploads/2019/06/2019-06-00-Water-Quality-Report-Approved-Final.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.2347839, -76.8503957], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Steelton Boro Water Authority</b><i> on the Susquehanna river</i><br>275 Christian St, Steelton, PA 17113<br><br><b>Facility Descriptions: </b>Our water source is supplied by surface water from the Susquehanna River and treated at our filtration plant along Christian Street.<br><br><b>Confidence Consumer Report, </b>where available: http://www.steeltonpa.com/wp-content/uploads/2019/06/2018-CCR.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

L.marker([40.1894112, -76.7272265], {
  icon: blueCircle,
})
  .addTo(map)
  .bindPopup(
    "<b>Royalton Boro</b><i> on the Susquehanna river</i><br>101 Northumberland St, Middletown, PA 17057<br><br><b>Facility Descriptions: </b>Customers receive their water from six (6) ground water wells located in the Borough of Middletown. All wells are treated with chlorine for disinfection, and a fluoride solution is also added. Water from Middletown well numbers 3 and 6 are equipped with an air stripping tower for the rmeoval of volatile organic compounds.<br><br><b>Confidence Consumer Report, </b>where available: https://www.mysuezwater.com/sites/default/files/MiddletownCCR2017.pdf<br><br><b>Recommendation: </b>Should be independently monitored for radionuclides & fracking chemicals."
  );

//Landfills Accepting Fracking Waste
var redSquare = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='redSquare'></div>",
});

var yellowSquare = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='yellowSquare'></div>",
});

L.marker([40.4401981, -80.2891127], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Imperial Landfill</b><br>11 Boggs Rd  Imperial PA 15126<br><br><b>Facility receiving leachate for processing from this landfill: </b>MOON TWP MA STP<br><br>"
  );

L.marker([39.9826775, -78.9824383], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Mostroller Landfill</b><br>7095 Glades Pike Road Somerset PA 15501<br><br><b>Facility receiving leachate for processing from this landfill: </b>SCI LAUREL HIGHLANDS STP<br><br>"
  );

L.marker([39.8951256, -79.8389709], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Chestnut Valley Landfill</b><br>1184 McClellandtown Rd McClellandtown PA 15458<br><br><b>Facility receiving leachate for processing from this landfill: </b>UNIONTOWN STP<br><br>"
  );

L.marker([40.132588, -79.5856699], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Greenridge Reclamation Landfill</b><br>234 Landfill Road Scottdale PA 15683<br><br><b>Facility receiving leachate for processing from this landfill: </b>MAWC - NEW STANTON STP<br><br>"
  );

L.marker([40.1443194, -79.8590989], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Westmoreland Waste Sanitary Landfill</b><br>901 Tyrol Blvd Belle Vernon PA 15012<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([40.2505283, -79.8784512], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Kelly Run Sanitation Landfill</b><br>1500 Hayden Blvd Elizabeth PA 15037<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([40.2778183, -79.9893216], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>South Hills Landfill</b><br>3100 Hill Road South Park Township PA 15129<br><br><b>Facility receiving leachate for processing from this landfill: </b>PINEY FORK STP<br><br>"
  );

L.marker([40.1214595, -78.8010522], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Shade Landfill</b><br>1176 Number 1 Road Cairnbrook PA 15924<br><br><b>Facility receiving leachate for processing from this landfill: </b>JOHNSTOWN STP<br><br>"
  );

L.marker([40.3683973, -78.8722809], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Laurel Highlands Landfill</b><br>260 laurel ridge road Johnstown PA 15909<br><br><b>Facility receiving leachate for processing from this landfill: </b>JOHNSTOWN STP<br><br>"
  );

L.marker([40.3887413, -79.6712601], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Valley Landfill</b><br>6015 Pleasant Valley Rd Irwin PA 15642<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([41.1582717, -77.3588192], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Wayne Township Landfill</b><br>15 Landfill Ln McElhattan PA 17748<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([41.174213, -76.55807], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>White Pines Landfill</b><br>515 PA-442 Millville PA 17846<br><br><b>Facility receiving leachate for processing from this landfill: </b>MILLVILLE BOROUGH /Myers Environmental Services<br><br>"
  );

L.marker([40.8518934, -75.2573891], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Grand Central Sanitary Landfill</b><br>1963 Pen Argyl Rd Pen Argyl PA 18072<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([41.3959709, -75.734154], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Alliance Landfill</b><br>398 S Keyser Ave Taylor PA 18517<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([41.7528529, -77.2929095], {
  icon: redSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Phoenix Resources Landfill</b><br>782 Antrim Rd.  Wellsboro PA 16901<br><br><b>Facility receiving leachate for processing from this landfill: </b><br><br>"
  );

L.marker([41.7741633, -76.6318799], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Bradford County Landfill #2</b><br>101243<br><br><b>Facility receiving leachate for processing from this landfill: </b>108 Steam Hollow Rd, PO Box 10 Burlington  PA 18814<br><br>"
  );

L.marker([40.6733245, -74.3038842], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Commonwealth Environmental Systems Landfill</b><br>101615<br><br><b>Facility receiving leachate for processing from this landfill: </b>99 Commonwealth Rd Hegins PA  17938<br><br>"
  );

L.marker([40.139868, -77.500617], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Cumberland County Environmental Systems Landfill</b><br>100945<br><br><b>Facility receiving leachate for processing from this landfill: </b>620 Newville Rd Newburg PA 17240<br><br>"
  );

L.marker([40.494056, -79.1320163], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Evergreen Landfill</b><br>100434<br><br><b>Facility receiving leachate for processing from this landfill: </b>1310 Luciusboro Rd Blairsville PA 15717<br><br>"
  );

L.marker([41.428478, -75.6099614], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Keystone Sanitary Landfill</b><br>101247<br><br><b>Facility receiving leachate for processing from this landfill: </b>249 Dunham Drive Dunmore PA 18512<br><br>"
  );

L.marker([42.068872, -80.020956], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Lake View Landfill</b><br>100329<br><br><b>Facility receiving leachate for processing from this landfill: </b>851 Robinson Road E Erie PA 16509<br><br>"
  );

L.marker([40.3846167, -80.3203017], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Max Environmental Technologies Inc Bulger Facility</b><br>PAD059087072<br><br><b>Facility receiving leachate for processing from this landfill: </b>80 Bulger Cando Rd Bulger PA 15019<br><br>"
  );

L.marker([40.212226, -79.699292], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Max Environmental Technologies Inc Yukon Facility</b><br>301071<br><br><b>Facility receiving leachate for processing from this landfill: </b>233 Max Lane Yukon PA 15698<br><br>"
  );

L.marker([41.6674317, -78.6419158], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>McKean County Landfill</b><br>100361<br><br><b>Facility receiving leachate for processing from this landfill: </b>19 Ness Lane Kane PA 16735<br><br>"
  );

L.marker([39.9550928, -76.5905865], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Modern Landfill</b><br>100113<br><br><b>Facility receiving leachate for processing from this landfill: </b>4400 Mount Pisgah York PA 17406<br><br>"
  );

L.marker([40.3767472, -80.100055], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Monroeville Landfill</b><br>100594<br><br><b>Facility receiving leachate for processing from this landfill: </b>600 Thomas St Ext Monroeville PA 15147<br><br>"
  );

L.marker([41.0179715, -79.8979971], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Northwest Sanitary Landfill</b><br>100585<br><br><b>Facility receiving leachate for processing from this landfill: </b>1436 W Sunbury Rd West Sunbury PA 16061<br><br>"
  );

L.marker([40.8157091, -80.0755142], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Seneca Landfill (Vogel Landfill)</b><br>100403<br><br><b>Facility receiving leachate for processing from this landfill: </b>421 Hartman Rd Evans City PA 16033<br><br>"
  );

L.marker([40.2309455, -78.9173027], {
  icon: yellowSquare,
})
  .addTo(map)
  .bindPopup(
    "<b>Southern Alleghenies Landfill</b><br>100081<br><br><b>Facility receiving leachate for processing from this landfill: </b>843 Miller PIcking Rd Davidsville PA 15928<br><br>"
  );
