

function createObject(s1, s2){
    // if strings are of different length, they cannot be anagrams
    if(s1.length !== s2.length){
        return false
    }

    //create our objects
    let s1Obj = {}
    let s2Obj = {}

    // populate the objects with data from their respective string
    for(let i = 0; i < s1.length; i++){
        if(!s1Obj[s1[i]]){
            s1Obj[s1[i]] = 1 // for each new letter key, give a value of one
        }else{
            s1Obj[s1[i]]++ // increment the value for each letter that already exists
        }
    }
    for(let i = 0; i < s2.length; i++){
        if(!s2Obj[s2[i]]){
            s2Obj[s2[i]] = 1
        }else{
            s2Obj[s2[i]]++
        }
    }
    return isAnagram(s1Obj, s2Obj)
}


function isAnagram(a, b){
    // create an array of object keys
    const aKeys = Object.keys(a) // an apple object becomes ["a", "p", "l", "e"] here
    const bKeys = Object.keys(b)

    // if number of keys is different, objects are not equivalent
    if (aKeys.length != bKeys.length) {
        return false
    }

    for(let i = 0; i < aKeys.length; i++){
        // if object values are not the same, objects are not equivalent
        const value = aKeys[i]
        if(a[value] !== b[value]){
            return false
        }
    }

    // if none of the conditional statements were triggered, the strings are anagrams of one another
    return true
}

// createObject("apple", "mapple") // false
// createObject("apple", "maple") // false
// createObject("apple", "paple") // true
// createObject("apple", "apple") // true
// createObject("iceman", "cinema") // true
// createObject("through", "driveway") // false
// createObject("misc", "derc") // false
// createObject("miscellaneous", "misc") // false
// createObject("thru", "urth") // true
// createObject("reduce", "reducr") // false

