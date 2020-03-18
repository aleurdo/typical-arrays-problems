exports.min = function min(array) {
    if (Array.isArray(array) == false || array == undefined) return 0;
    else if (array.length == 0) return 0;
    else {
        let res = array[0];
        for (let i = 0; i < array.length; i++) {
            if (res > array[i])
                res = array[i];

        }
        return res;
    }

}


exports.max = function max(array) {
    if (Array.isArray(array) == false || array == undefined) return 0;
    else if (array.length == 0) return 0;
    else {
        let res = array[0];
        for (let i = 0; i < array.length; i++) {
            if (res < array[i])
                res = array[i];
        }
        return res;
    }
}

exports.avg = function avg(array) {
    if (Array.isArray(array) == false || array == undefined) return 0;
    else if (array.length == 0) return 0;
    else {
        let summ = 0;
        array.forEach(item => summ += item);
        console.log(summ / array.length);
        return summ / array.length;
    }
}