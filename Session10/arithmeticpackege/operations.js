 exports.customMath = {
     name: 'custom Math',
     sum: (num1, num2) => num1 + num2,
     subtract: (num1, num2) => num1 - num2,
//  product: (numbers = []) => {
//      return numbers.reduce((accumlator, currentValue) => accumlator * currentValue)
//  }
    product: (numbers = []) => 
    numbers.reduce((accumulator, currentValue) => accumulator * currentValue),

    division: function (num1, num2){
        return num1 / num2
    }

}

exports.something = { title: 'Test purposes'}