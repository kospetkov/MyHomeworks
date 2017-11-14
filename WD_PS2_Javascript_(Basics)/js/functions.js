 function sumOfNumbers() {
    var firstNumber = Number(document.getElementById("first").value);
    var secondNumber = Number(document.getElementById("second").value);
    if((firstNumber == NaN) || (firstNumber == null) || (firstNumber == undefined)){
    firstNumber = 0;
    }
     if((secondNumber == NaN) || (secondNumber == null) || (secondNumber == undefined)){
        secondNumber = 0;
    }
    var sum = 0;
    var i = 0;
    for(i = firstNumber; i <= secondNumber; i ++) {
            sum += i;
    }
        document.getElementById('sum').innerHTML = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = ' + sum;
 }

 function sumOfNumbers_1() {
    var firstNumber = 0;
    var secondNumber = 0;
    firstNumber = Number(document.getElementById("first_1").value);
    secondNumber = Number(document.getElementById("second_1").value);
    if((firstNumber == NaN) || (firstNumber == null) || (firstNumber == undefined)){
    firstNumber = 0;
    }
     if((secondNumber == NaN) || (secondNumber == null) || (secondNumber == undefined)){
        secondNumber = 0;
    }
    var sum = 0;
    var i = 0;
    for(i = firstNumber; i <= secondNumber; i ++) {
        if((Math.abs(i % 10) === 2) || (Math.abs(i % 10) === 3) || (Math.abs(i % 10) === 7)) {
            sum += i;
        }
    }
        document.getElementById('sum_1').innerHTML = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = ' + sum;
 }

 function treeBild() {
     for(var i = 0; i < 50; i ++) {
         var star = '';
         var rowTree = document.createElement('p');
         for(var j = 0; j < i; j ++) {
             star += '*';
         }
         rowTree.innerText = star;
         document.getElementById('div__tree').appendChild(rowTree);
     }
 }

 function timeOutOfSeconds() {
     var inputData = Number(document.getElementById('input__data').value);
     var hour = Math.floor(inputData / 3600);
     if(hour < 10) hour = "0" + hour;
     var minute = Math.floor((inputData / 60) % 60);
     if(minute < 10) minute = "0" + minute;
     var secund = Math.floor(inputData % 60);
     if(secund < 10) secund = "0" + secund;
     document.getElementById('p__date').innerText = "time is  " + hour + ":" + minute + ":" + secund;
 }

 function ageOutput() {
     var inputData = Number(document.getElementById('age__data').value);
     var year = inputData % 10;
     var outputElement = document.getElementById('p__age');
     switch(year) {
         case 1:
             outputElement.innerText = "Вам  " + inputData + " год";
             break;
         case 2:
         case 3:
         case 4:
             outputElement.innerText = "Вам  " + inputData + " года";
             break;
         case 5:
         case 6:
         case 7:
         case 8:
         case 9:
         case 0:
             outputElement.innerText = "Вам  " + inputData + " лет";
     }
 }

 function dateDifference() {
     var inputData = document.getElementById('first_date').value;
     var date_1 = new Date(inputData).getTime();
     inputData = document.getElementById('second_date').value;
     var date_2 = new Date(inputData).getTime();

 }



