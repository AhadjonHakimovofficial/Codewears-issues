function sentencify(arr) {
    if (arr[0] === arr[0].toUpperCase()) {
        let cur = []
        for (let val of arr) cur.push(val)
        let srt = cur.join(` `);
        let last = `${srt}.`
        return last
    } else {
        arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase();
        let cur = []
        for (let val of arr) cur.push(val)
        let srt = cur.join(` `);
        let last = `${srt}.`
        return last
    }
}
console.log(sentencify(["HELLO", "Hi", "my", "name", "is", "Akhadjon"])
)