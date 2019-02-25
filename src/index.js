/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.forEach(function (item, i) {
        if( i === item -1 )
            return;
        if( i === preferences[ preferences[item - 1] -1 ] - 1 )
            count++;
    });
    return count/3;
};
