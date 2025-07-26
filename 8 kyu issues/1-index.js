function removeChar(str) {
    let arr = []
    for (let val of str) {
        arr.push(val)
    }
    let cur = arr.slice(1, -1).join("")
    return cur
}

console.log(removeChar("string"));
