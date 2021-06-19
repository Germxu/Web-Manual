let de = {
    a: 1,
    b: function () {
        console.log('b');
    },
    c: (params) => {
        console.log(this);
    }
}

de.c()