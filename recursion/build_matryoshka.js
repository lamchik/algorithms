function build_matryoshka (size, n) {
    if (n >= 1) {
        console.log(`Создаём низ матрёшки размера ${size}.`)
        build_matryoshka(size - 1, n - 1) // stack: 2, 1
        console.log(`Создаём верх матрёшки размера ${size}.`)
    }
    else return
}

// res: 3, 2, 2


// stack: 3, 2 // 2, 1
console.log(build_matryoshka(3, 2))
