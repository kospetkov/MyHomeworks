function sumOfNumbers() {
    var firstNumber = Number(document.getElementById("first").value);
    var secondNumber = Number(document.getElementById("second").value);
    if(!firstNumber || !secondNumber) {
        document.getElementById('sum').innerText = "you enter not correct data";
        return;
    }
    var sum = 0;
    for(var i = firstNumber; i <= secondNumber; i ++) {
        sum += i;
    }
    document.getElementById('sum').innerText = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = ' + sum;
}

function sumOfNumbers_1() {
    var firstNumber = Number(document.getElementById("first_1").value);
    var secondNumber = Number(document.getElementById("second_1").value);
    if(!firstNumber || !secondNumber) {
        document.getElementById('sum_1').innerText = "you enter not correct data";
        return;
    }
    var sum = 0;
    for(var i = firstNumber; i <= secondNumber; i ++) {
        var abs = Math.abs(i % 10);
        if((abs === 2) || (abs === 3) || (abs === 7)) {
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
    if(!inputData) {
        document.getElementById('p__date').innerText = "you enter not correct data";
        return;
    }
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
    var outputElement = document.getElementById('p__age');
    if(!inputData) {
        document.getElementById('p__age').innerText = "you enter not correct data";
        return;
    }
    if((inputData >= 10) && (inputData <= 20)) {
        inputData = Number(inputData);
        outputElement.innerText = "Вам  " + inputData + " лет";
        return;
    }
    else {
        var year = inputData % 10;
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
}

function dateDifference() {
    var inputData1 = String(document.getElementById('first_date').value);
    var date1 = new Date(inputData1);
    var inputData2 = String(document.getElementById('second_date').value);
    var date2 = new Date(inputData2);
    if ((date1 == 'Invalid Date') || (date2 == 'Invalid Date')) {
        document.getElementById('p__date_1').innerText = "you enter not correct data";
        return;
    }
    if (date1.getFullYear() > date2.getFullYear()) {
        var year = date1.getFullYear() - date2.getFullYear();
        var month = date1.getMonth() - date2.getMonth();
        if (month < 0) {
            month = 12 - month;
            year--;
            if(year < 0) {
                year = 0;
            }
        }
        var day = date1.getDate() - date2.getDate();
        if (day < 0) {
            day = 30 - day;
            month--;
        }
        var hour = date1.getHours() - date2.getHours();
        if (hour < 0) {
            hour = 24 - hour;
            day--;
        }
        var minute = date1.getMinutes() - date2.getMinutes();
        if (minute < 0) {
            minute = 60 - minute;
            hour--;
        }
        var secund = date1.getSeconds() - date2.getSeconds();
        if (secund < 0) {
            secund = 60 - secund;
            minute--;
        }
    }
    document.getElementById('p__date_1').innerText = "year " + year + ", month " + month + ", day " + day + ", hour " + hour + ", minute" + minute + ", secunds " + secund;
}

function dateForZodiak() {
    var inputData = document.getElementById('date_for_zodiak').value;
    var date = new Date(inputData);
    if (date == 'Invalid Date') {
        document.getElementById('p_zodiak').innerText = "you enter not correct data";
        return;
    }
    var month = date.getMonth();
    var day = date.getDate();
    var div = document.getElementById('zodiak');
    var parent = document.getElementById('parent_div');
    parent.removeChild(div);
    div = document.createElement('div');
    div.id = "zodiak";
    parent.appendChild(div);
    var myImg = document.createElement('img');
    switch(month) {
        case 0:
            if (day <= 20) {
                myImg.src = "img/1.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/2.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 1:
            if (day <= 18) {
                myImg.src = "img/2.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/3.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 2:
            if (day <= 20) {
                myImg.src = "img/3.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }   
            else {
                myImg.src = "img/4.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            } 
            break;
        case 3:
            if (day <= 20) {
                myImg.src = "img/4.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }    
            else {
                myImg.src = "img/5.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 4:
            if (day <= 20) {
                myImg.src = "img/5.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/6.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 5:
            if (day <= 21) {
                myImg.src = "img/6.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/7.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 6:
            if (day <= 22) {
                myImg.src = "img/7.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/8.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 7:
            if (day <= 23) {
                myImg.src = "img/8.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/9.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 8:
            if (day <= 23) {
                myImg.src = "img/9.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/10.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 9:
            if (day <= 23) {
                myImg.src = "img/10.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/11.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 10:
            if (day <= 21) {
                myImg.src = "img/11.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/12.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            break;
        case 11:
            if (day <= 21) {
                myImg.src = "img/12.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
            else {
                myImg.src = "img/1.jpg";
                myImg.className = "img_zodiak";
                div.appendChild(myImg);
            }
   

    }
   
}

function buildCheckBoard() {
    var inputData1 = Number(document.getElementById('height_chess').value);
    var inputData2 = Number(document.getElementById('width_chess').value);
    if (!inputData1 || !inputData2) {
        document.getElementById('div__board').innerText = "you enter not correct data";
    }
    var div = document.getElementById('div__board');
    var parent = document.getElementById('div_chess');
    parent.removeChild(div);
    div = document.createElement('div');
    div.id = "div__board";
    div.className = "chess_style";
    div.style.height = inputData1 * 50 + "px";
    div.style.width = inputData2 * 50 + "px";
    for (var i = 0; i < inputData1; i++) {
        for (var j = 0; j < inputData2; j++) {
             var divChess = document.createElement('div');
             if ((i + j) % 2 === 0) {
                divChess.className = "board_black";
                div.appendChild(divChess);
             }
             else {
                divChess.className = "board_white";
                div.appendChild(divChess);
             }
        } 
    }
    parent.appendChild(div);
}

function floorForApartament() {
    var entrances = Number(document.getElementById('entrances').value);
    var onTheFloor = Number(document.getElementById('on_the_floor').value);
    var floorsHouse = Number(document.getElementById('floors_house').value);
    var apartament = Number(document.getElementById('apartament').value);
    var entrance = Math.floor(((apartament - 1) / (floorsHouse * onTheFloor))) + 1;
    var f_floor = Math.floor(((apartament - 1) % (floorsHouse * onTheFloor)) / onTheFloor) + 1;
    console.log(entrance);
    console.log(f_floor);
}