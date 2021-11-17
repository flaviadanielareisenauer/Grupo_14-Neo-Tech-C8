function minMaxValidationFunc(that, value) {
    let min = parseInt(that.getAttribute("min"));
    let max = parseInt(that.getAttribute("max"));
    let val = parseInt(value);

    if (val < min) {
        return min;
    } else if (val > max) {
        return max;
    } else {
        return val;
    }
}