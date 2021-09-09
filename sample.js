Map.setOptions('SATELLITE');
Map.centerObject(table,10);
Map.addLayer(table,{color:'FF3450'}, 'colored',0);
var L8= ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
          .filterDate('2020-01-01', '2020-03-30')
          .filterBounds(table);
          
print (L8);
Map.addLayer(L8.first(),imageVisParam,"RGB",0);
var L8=L8.mean();
print(L8);
//Landset 8 Data
Map.addLayer(L8.clip(table),imageVisParam,"YGN Clipped RGB of Landset 8");
Map.addLayer(L8.clip(table),imageVisParam2,"YGN Clipped Agriculture of Landset 8",0);
Map.addLayer(L8.clip(table),imageVisParam4,"YGN Clipped Geology of Landset 8", 0);
//Sentinel 2 Data
var sent2= ee.ImageCollection("COPERNICUS/S2")
          .filterDate('2020-01-01','2020-03-30')
          .filterBounds(table);
      
print (sent2);
Map.addLayer(sent2.first(),RGBSentinel,"RGB of Sentinel 2",0);
var sent2=sent2.mean()
print (sent2);

Map.addLayer(sent2.clip(table),Senti2ClipRGB,"YGN Clipped RGB of Sentinel 2");
Map.addLayer(sent2.clip(table),Senti2ClipINF,"YGN Clipped Colour Infrared of Sentinel 2",0);
Map.addLayer(sent2.clip(table),Senti2ClipAgri,"YGN Clipped Agriculture of Sentinel 2",0);
