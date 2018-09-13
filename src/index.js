/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
{
    let length = preferences.length; 
    let triangles = 0;  
    for (let i = 0; i<length; i++) { 
        let next1 = preferences[i] - 1;
        if (next1 == i) continue;
        let next2 = preferences[next1] - 1;
        if (next1 == next2) continue;
        let next3 = preferences[next2] - 1;
        if (next3 == next2) continue;
        if (next3 == i) {
            triangles++;
        }
     }
     return triangles / 3; // your implementation
};
