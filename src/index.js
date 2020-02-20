
exports.min = function min (array) {
    if(array === undefined) return 0;
    else if(array.length == 0) return 0;
    else {
        let minValue = array[0];
        array.forEach((elem) => {
            if(elem < minValue) minValue = elem;
        })
        return minValue;
    }
}

exports.max = function max (array) {
    if(array === undefined) return 0;
    else if(array.length == 0) return 0;
    else {
        let maxValue = array[0];
        array.forEach((elem) => {
            if(elem > maxValue) maxValue = elem;
        })
        return maxValue;
    }
}

exports.avg = function avg (array) {
    if(array === undefined) return 0;
    else if(array.length == 0) return 0;
    else {
        let k = array.length;
        return(array.reduce((sum, elem) => sum+elem)/k)
    }
}
