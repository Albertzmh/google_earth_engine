var l8= ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA")
          .filterDate('2021-01-01', '2021-01-30')
          .filterBounds(geometry);
print (l8.size());
Map.addLayer(l8.mean(),imageVisParam,"Landsat 8");
