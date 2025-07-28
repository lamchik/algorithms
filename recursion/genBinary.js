function genBinary(n, prefix) {
    if (n === 0) {
        console.log(prefix); // 00 01 10 11
    } else {
        genBinary(n - 1, prefix + "0");
        console.log('here1,', prefix, n)
        genBinary(n - 1, prefix + "1");
        console.log('here2,', prefix, n)
    }
}

genBinary(2, "");

