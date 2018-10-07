// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (property) => {
    return property;
};

const createNotEnumerableProperty = (property) => {
    return Symbol(property);
};

const createProtoMagicObject = () => {
    return Function;
};

let counter = 0;
let incrementor = () => {
    incrementor = function () {
        counter += 1;
        return incrementor;
    };
    incrementor.toString = function () {
        return counter;
    };
    return incrementor();
};

let asyncCounter = 0;
const asyncIncrementor = () => {
    asyncCounter += 1;
    return new Promise(resolve => {
        resolve(asyncCounter);
    })
};

function* createIncrementer() {
    let index = 1;
    while (index <= 10)
        yield index++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
};

const getDeepPropertiesCount = obj => {
    let count = 0;
    let object = obj;

    function addCount(object) {
        for (let key in object) {
            if (typeof (object[key]) === 'object') {
                count += 1;
                addCount(object[key])
            }
        }
        return count;
    }
    return addCount(object);
};

const createSerializedObject = () => {
    return Object('object');
};

const toBuffer = () => {};

const sortByProto = (arr) => {
    return arr.sort((a, b) => {
        a - b
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;