function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {
                    value: array[nextIndex++],
                    done: false
                }
                :
                {
                    value: undefined,
                    done: true
                };
        }
    };
}
const it = makeIterator(['a', 'b', "c"]);
console.log(
    it.next()
);
console.log(

    it.next()
);
console.log(

    it.next()
);
console.log(

    it.next()
);
// { value: "a", done: false }
it.next()
// { value: "b", done: false }
it.next()
  // { value: undefined, done: true }