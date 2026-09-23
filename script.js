function sumDiagonals (matrix, rindex, cindex) {
    let sum = 0;
    let distance = 1
    for (let i = -1 * distance; i <= distance; i += 2) {
            for (let j = -1 * distance; j <= distance; j += 2) {
                if(rindex + i >= 0 && rindex + i < matrix.length && cindex + j >= 0 && cindex + j < matrix[0].length) {
                    sum += matrix[rindex + i][cindex + j];
                }
        }
    }
    return sum;
}

arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
// console.log(sumDiagonals(arr, 0, 0));

function copyInc(arr) {
    let newArr = [];
    arr.forEach(subArr => {
        let newSubArr = []
        subArr.forEach(num => {
            newSubArr.push(num += 1);
        });
        newArr.push(newSubArr);
    });
    return newArr;
}

// console.log(copyInc([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


function isLiteralObj(x) {
  return (!!x) && (x.constructor === Object);
}

function deepObjPrint(obj) {
    for (let pair of Object.entries(obj)) {
        if(isLiteralObj(pair[1])) {
            console.log(pair[0])
            deepObjPrint(pair[1]);

        }
        else console.log(pair[0] + ": " + pair[1])
        
    }
}

let obj = {
    999: null,
    a: 1,
    b: {
        xyz: "abc",
        foobar: {
            hello_world: [1, 2, 3],
        },
    },
    c: "def",
};
deepObjPrint(obj); // should print:
