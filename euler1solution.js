var sumofmultiplesofthreeandfive = function(input) {
    var sum = 0;
    for (var i = 1; i < input; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
        else if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumofmultiplesofthreeandfive(1000));