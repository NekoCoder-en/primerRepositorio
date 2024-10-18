function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

const values = [0, 1, false, 2, '', 3, null, 4];
const truthyValues = removeFalsyValues(values);
console.log(truthyValues); 