const pointInPolygon = (point, polygon) => {
    var lat = point.lat, lon = point.lng;

    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var polyLatI = polygon[i][0], polyLonI = polygon[i][1];
        var polyLatJ = polygon[j][0], polyLonJ = polygon[j][1];

        var intersect = ((polyLonI > lon) !== (polyLonJ > lon)) &&
            (lat < ((polyLatJ - polyLatI) * (lon - polyLonI)) / (polyLonJ - polyLonI) + polyLatI);
        
        if (intersect) inside = !inside;
    }

    return inside;
}

export default pointInPolygon;
