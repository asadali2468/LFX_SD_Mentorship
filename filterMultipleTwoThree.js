const filterMultipleTwoThree = (param) => {
    const listCheck = param.length % 10;

    if (listCheck !== 0) {
        return (`${param.length} length isn't a multiple of 10.`);
    } else {
        const filteredList = [];
        param.forEach((currentValue, index) => {
            if (((index + 1) % 2 !== 0) && ((index + 1) % 3 !== 0)) {
                filteredList.push(currentValue);
            }
        });
        return filteredList;
    }
}

console.log(filterMultipleTwoThree([12,10,15,18,19,13,14,10,0,18]))


module.exports = filterMultipleTwoThree;
