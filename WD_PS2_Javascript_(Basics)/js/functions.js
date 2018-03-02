function sumOfNumbers() {
    var firstNumber = Number(document.getElementById("first").value);
    var secondNumber = Number(document.getElementById("second").value);
    if (!firstNumber || !secondNumber) {
        document.getElementById('sum').innerText = "you enter not correct data";
        return;
    }
    if (firstNumber === secondNumber) {
        document.getElementById('sum').innerText = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = 0';
        return;
    }
    var i, length;
    if ((firstNumber - secondNumber) <= 0) {
        i = firstNumber;
        length = secondNumber;
    }
    else {
        i = secondNumber;
        length = firstNumber;
    }
    var sum = 0;
    for (; i <= length; i++) {
        sum += i;
    }
    document.getElementById('sum').innerText = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = ' + sum;
}

function sumOfNumbers_1() {
    var firstNumber = Number(document.getElementById("first_1").value);
    var secondNumber = Number(document.getElementById("second_1").value);
    if (!firstNumber || !secondNumber) {
        document.getElementById('sum_1').innerText = "you enter not correct data";
        return;
    }
    if (firstNumber === secondNumber) {
        document.getElementById('sum_1').innerText = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = 0';
        return;
    }
    var i, length;
    if ((firstNumber - secondNumber) <= 0) {
        i = firstNumber;
        length = secondNumber;
    }
    else {
        i = secondNumber;
        length = firstNumber;
    }
    var sum = 0;
    for (; i <= length; i++) {
        var abs = Math.abs(i % 10);
        if ((abs === 2) || (abs === 3) || (abs === 7)) {
            sum += i;
        }
    }
    document.getElementById('sum_1').innerHTML = 'sum of nambers from ' + firstNumber + ' to ' + secondNumber + ' is = ' + sum;
}

function treeBild() {
    for (var i = 0; i < 50; i++) {
        var star = '';
        var rowTree = document.createElement('p');
        for (var j = 0; j < i; j++) {
            star += '*';
        }
        rowTree.innerText = star;
        document.getElementById('div__tree').appendChild(rowTree);
    }
}

function timeOutOfSeconds() {
    var inputData = Number(document.getElementById('input__data').value);
    if (!inputData) {
        document.getElementById('p__date').innerText = "you enter not correct data";
        return;
    }
    var hour = Math.floor(inputData / 3600);
    if (hour < 10) hour = "0" + hour;
    var minute = Math.floor((inputData / 60) % 60);
    if (minute < 10) minute = "0" + minute;
    var secund = Math.floor(inputData % 60);
    if (secund < 10) secund = "0" + secund;
    document.getElementById('p__date').innerText = "time is  " + hour + ":" + minute + ":" + secund;
}

function ageOutput() {
    var inputData = Number(document.getElementById('age__data').value);
    var outputElement = document.getElementById('p__age');
    if (!inputData) {
        document.getElementById('p__age').innerText = "you enter not correct data";
        return;
    }
    if ((inputData >= 10) && (inputData <= 20)) {
        inputData = Number(inputData);
        outputElement.innerText = "Вам  " + inputData + " лет";
        return;
    }
    else {
        var year = inputData % 10;
        switch (year) {
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
    var inputData2 = String(document.getElementById('second_date').value);
    var dat1 = new Date(inputData1);
    var date1 = [];
    date1[0] = +dat1.getFullYear();
    date1[1] = +dat1.getMonth() + 1;
    date1[2] = +dat1.getDate();
    date1[3] = +dat1.getHours();
    date1[4] = +dat1.getMinutes();
    date1[5] = +dat1.getSeconds();
    var dat2 = new Date(inputData2);
    var date2 = [];
    date2[0] = +dat2.getFullYear();
    date2[1] = +dat2.getMonth() + 1;
    date2[2] = +dat2.getDate();
    date2[3] = +dat2.getHours();
    date2[4] = +dat2.getMinutes();
    date2[5] = +dat2.getSeconds();
    if ((dat1 == 'Invalid Date') || (date2 == 'Invalid Date') || (date1.length != 6) || (date2.length != 6))  {
        document.getElementById('p__date_1').innerText = "you enter not correct data";
        return;
    }
    var secund = 0, minute = 0, hour = 0, day = 0, month = 0, year = 0, timeInterval = {};
    const SECUND_IN_MINUTE = 60;
    const SECUND_IN_HOUR = 3600;
    const SECUND_IN_DAY = 86400;
    const SECUND_IN_MONTH = 2592000;
    const SECUND_IN_YEAR = 31536000;
    var dateInSecund1 = +((+date1[0] * SECUND_IN_YEAR) + (+date1[1] * SECUND_IN_MONTH) + (+date1[2] * SECUND_IN_DAY) + (+date1[3] * SECUND_IN_HOUR) + (+date1[4] * SECUND_IN_MINUTE) + (+date1[5]));
    var dateInSecund2 = +((+date2[0] * SECUND_IN_YEAR) + (+date2[1] * SECUND_IN_MONTH) + (+date2[2] * SECUND_IN_DAY) + (+date2[3] * SECUND_IN_HOUR) + (+date2[4] * SECUND_IN_MINUTE) + (+date2[5]));
    var resultInSecund = Math.abs(dateInSecund1 - dateInSecund2);
    year = Math.floor(resultInSecund / SECUND_IN_YEAR);
    month = Math.floor((resultInSecund - (year * SECUND_IN_YEAR)) / SECUND_IN_MONTH);
    day = Math.floor((resultInSecund - ((year * SECUND_IN_YEAR) + (month * SECUND_IN_MONTH))) / SECUND_IN_DAY);
    hour = Math.floor((resultInSecund - ((year * SECUND_IN_YEAR) + (month * SECUND_IN_MONTH) + (day * SECUND_IN_DAY))) / SECUND_IN_HOUR);
    minute = Math.floor((resultInSecund - ((year * SECUND_IN_YEAR) + (month * SECUND_IN_MONTH) + (day * SECUND_IN_DAY) + (hour * SECUND_IN_HOUR))) / SECUND_IN_MINUTE);
    secund = Math.floor(resultInSecund - ((year * SECUND_IN_YEAR) + (month * SECUND_IN_MONTH) + (day * SECUND_IN_DAY) + (hour * SECUND_IN_HOUR) + (minute * SECUND_IN_MINUTE)));
    timeInterval = {
        "год" : year,
        "месяц" : month,
        "день" : day,
        "час" : hour,
        "минута" : minute,
        "секунда" : secund
    }
    var stringResult = '';
    for (var i in timeInterval) {
        stringResult += ' || ' + i + ' : ' + timeInterval[i];
    }
    document.getElementById('p__date_1').innerText = stringResult;
}

function dateForZodiak() {
    var inputData = document.getElementById('date_for_zodiak').value;
    var dateArray = inputData.split('/');
    var date = new Date(dateArray[0], (dateArray[1] - 1), dateArray[2]);
    if ((date === 'Invalid Date') || !(dateArray[1] == (date.getMonth()) + 1)) {
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
    switch (month) {
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
    var inputData1 = +document.getElementById('height_chess').value;
    console.log(typeof(inputData1));
    var inputData2 = +document.getElementById('width_chess').value;
    if (!inputData1 || !inputData2) {
        document.getElementById('div__board').innerText = "you enter not correct data";
    }
    var div = document.getElementById('div__board');
    var parent = document.getElementById('div_chess');
    parent.removeChild(div);
    div = document.createElement('div');
    div.id = "div__board";
    div.className = "chess_style";
    div.style.height = inputData1 * 50 + 'px';
    div.style.width = inputData2 * 50 + 'px';
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
    if ((entrances * onTheFloor * floorsHouse) < apartament) {
        document.getElementById('p_floor').innerText = "you enter not correct data";
        return;
    }
    var entrance = Math.floor(((apartament - 1) / (floorsHouse * onTheFloor))) + 1;
    var f_floor = Math.floor(((apartament - 1) % (floorsHouse * onTheFloor)) / onTheFloor) + 1;
    document.getElementById('p_floor').innerText = 'подъезд № ' + entrance + ';  этаж № ' + f_floor;
}

function sumForNumber() {
    var inputData = document.getElementById('input_number').value;
    if (!(+inputData)) {
        document.getElementById('p_number').innerText = "you enter not correct data";
        return;
    }
    var strLength = inputData.length;
    var sum = 0;
    var i;
    if (inputData.charAt(0) === '-') {
        i = 1;
    }
    else {
        i = 0;
    }
    for (; i < strLength; i++) {
        sum += +inputData.charAt(i);
    }
    document.getElementById('p_number').innerText = "sum digits of numbers  : " + sum;
}

function linksToList() {
    var inputData = document.getElementById('text_area').value;
    var links = inputData.split(',');
    var linksLength = links.length;
    var list = [];
    for (var i = 0; i < linksLength; i++) {
        list[i] = links[i].replace(/https?:\/\//gi, '').trim();
    }
    list.sort();
    var listLength = list.length;
    var parent = document.getElementById('div_for_links');
    var ul = document.getElementById('list_for_links');
    parent.removeChild(ul);
    var newUl = document.createElement('ul');
    newUl.setAttribute('id', 'list_for_links');
    for (var j = 0; j < listLength; j++) {
        var li = document.createElement('li');
        li.className = "link_style";
        li.innerHTML = '<a href="//' + list[j] + '">' + list[j] + '</a>';
        newUl.appendChild(li);
    }
    parent.appendChild(newUl);
}



