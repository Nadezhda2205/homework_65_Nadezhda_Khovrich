console.log('Задание 1');
let drinks = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];

for (let i = 0; i < drinks.length; i++){
    if (drinks[i] === 'молоко'){
        console.log('хорошо');
    }
    else if (drinks[i] === 'пиво'){
        console.log('плохо');
    };
};

console.log('Задание 2');
function average(numbers){
    let s = 0;
    for (let i = 0; i < numbers.length; i++){
        s += numbers[i];
    };
    avg = s / numbers.length;
    return avg;
};

console.log(average([1, 5, 12, 4, 3]));
console.log(average([2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(average([3, 10, 17]));


console.log('Задание 3');
function riddle(){
    let userAnswer = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?", 0);
    switch(userAnswer){
        case "пять":
            alert("Ответ верный");
            break;
        case "5":
            alert("Ответ верный");
            break;
        default:
            alert("Ответ неверный");
    };
};

riddle()


console.log('Задание 4');
let duck = {
    name: 'Дональд',
    color: 'белый',
    age: '1',
    toStr: function() { console.log(`${this.name}, ${this.color}, ${this.age} `) },
    say: function() { console.log('кря кря') }
};

duck.toStr()
duck.say()
