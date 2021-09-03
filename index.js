function toArray(obj) {
    let arr = []
    if (typeof(obj) === 'object') {
        for (let [key,value] of Object.entries(obj)) {
            arr.push(value)
        }
    }
    else { arr = [...obj] }
    return arr
}

function myEach(values, func) {
    let arr = toArray(values)
    for(let i of arr) {func(i)}
    return values
}

function myMap(values, func) {
    let arr = toArray(values)
    return arr.map( i => func(i))
}

function myReduce(values, func, acc = 9999999) { 
    let arr = toArray(values)
    if (acc === 9999999) { 
        acc = arr[0]
        arr.shift()
    }
    return arr.reduce(function(accu, i) { 
//        console.log(accu)
        return func(accu, i, arr) }, acc )
}


function myFind(values, func) {
    let arr = toArray(values)
    return arr.find(func)
}


function myFilter(values, func) {
    let arr = toArray(values)
    return arr.filter(func)
}

function mySize(values) {
    let arr = toArray(values)
    return arr.length
}

function myFirst(arr, amt = 1) {
    let newArr=[]
    if (amt === 1) {return arr[0]}

    for (let i = 0; i < amt; i++) {
        newArr.push(arr[i])
    }

    return newArr
}

function myLast(arr, amt = 1) {
    let newArr=[]
    let newerArr = []
    let len = arr.length - 1
    if (amt === 1) {return arr[len]}

    for (let i = 0; i < amt; i++) {
        newArr.push(arr[len-i])
    }

    len = newArr.length - 1

    for (let i = 0; i < amt; i++) {
        newerArr.push(newArr[len-i])
    }

    return newerArr
}

function myKeys(obj) {
    let arr = []
        for (let [key,value] of Object.entries(obj)) {
            arr.push(key)
        }
    return arr
}

function myValues(obj) {
    let arr = []
        for (let [key,value] of Object.entries(obj)) {
            arr.push(value)
        }
    return arr
}

function alert(i) {
    console.log(i)
}

//myEach([1, 2, 3], alert);

//myEach({one: 1, two: 2, three: 3}, alert);

//let a = myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);

const testArr = [1, 2, 3, 4]

let a = myLast(testArr, 3)

console.log(a)