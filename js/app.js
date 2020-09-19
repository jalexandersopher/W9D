function addMult(numOne, numTwo) {
    var result = (numOne + numTwo) * 5;
    return result;
}

function check(string) {
    if(string.length > 10) {
        return true;
    } else if(string.length < 10) {
        return false;
    } else {
        console.log("error");
    }
}

function arrayCheck(arrayToCheck) {
    for(var index = 0; index < arrayToCheck.lenth; index++) {
        
        if(arrayToCheck[index].startsWith("ph")) {
            return arrayToCheck[index];
        }

    }

    return "No string starts with ph."
}

console.log(addMult(2, 2));
console.log(addMult(10, 4));
console.log(addMult(7, 5));
console.log(check("spring"));
console.log(check("establishment"));
console.log(arrayCheck(["phone", "notphone"]));
console.log(arrayCheck(["test", "notphone"]));
console.log(arrayCheck(["notphone", "test", "phone"]));



