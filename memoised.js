const getNewMemoizedCalculation = () => {
    let obj = {}

    return function (a, b, operation = '+') {
        let key = `${a},${b},${operation}`
        let key2 = `${b},${a},${operation}`

        if (operation === '+' || operation === '*' ? (obj[key] !== undefined || obj[key2] !== undefined) : obj[key] !== undefined) {
            console.log('из кеша');
            return obj[key] || obj[key2];
        } else {
            console.log('считаем заново');
            let result;
            switch (operation) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = b !== 0 ? a / b : 'Ошибка: деление на 0 лох';
                    break;
                default:
                    return 'Ошибка: ты пидр';
            }

            obj[key] = result; // Сохраняем результат в кеш
            return result;
        }

}}

const memoizedCalculation = getNewMemoizedCalculation()


console.log(memoizedCalculation(1, 2, '/'))
console.log(memoizedCalculation(1, 2, '/'))
console.log(memoizedCalculation(2, 3, '+'))
console.log(memoizedCalculation(3, 2, '+'))
console.log(memoizedCalculation(3, 2, '*'))
console.log(memoizedCalculation(2, 3, '*'))
