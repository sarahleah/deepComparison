
const deepEqual = (obj1, obj2) => {
  if (typeof obj1 == "object" && typeof obj2 == "object" && obj1 !== null && obj2 !== null) {
    let keyArray1 = Object.keys(obj1);
    let keyArray2 = Object.keys(obj2);

    const arrayCompare = (array1, array2) => {
        let counter = 0;
        for (let i = 0; i < array1.length; i++) {
          if (typeof array1[i] == "object") {
              let goDeeper = deepEqual(array1[i], array2[i])
              if (goDeeper == true) {
                counter++
              } else {
                counter--;
              }
            } else if (array1[i] == array2[i]) {
            counter++;
            } else {
            counter--;
          }
          } 
        if (counter == array1.length) {
          return true;
        } else {
          return false
        }
      }
    
    const valCompare = (obj, keyArray) => {
        let valArray = [];
        for (let i = 0; i < keyArray.length; i++) {
          valArray.push(obj[keyArray[i]])
        }
        return valArray;
    }
    
    let valArray1 = valCompare(obj1, keyArray1);
    let valArray2 = valCompare(obj2, keyArray2);
      
      //console.log(valArray1, valArray2);

    if (keyArray1.length == keyArray2.length) {
      if (arrayCompare(keyArray1, keyArray2) == true) {
        //console.log("keyArray")
        if (arrayCompare(valArray1, valArray2) == true) {
          //console.log("valArray")
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else return false;
  } else {
    return false;
    }
  }


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true