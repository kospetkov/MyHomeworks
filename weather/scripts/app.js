$(document).ready(function () {
   const DB_JSON = $('.dbJson');
   const DATABASE = $('.database');
   const API = $('.api');

   DB_JSON.click(function () {
        DATABASE.removeClass('active');
        API.removeClass('active');
        DB_JSON.addClass('active');
        let pathToDb = 'php/get_json.php';
        getData(pathToDb);
        return false;
    });

    DATABASE.click(function () {
        DB_JSON.removeClass('active');
        API.removeClass('active');
        DATABASE.addClass('active');
        let pathToDb = 'php/get_db.php';
        getData(pathToDb);
        return false;
    });

    API.click(function () {
        DATABASE.removeClass('active');
        DB_JSON.removeClass('active');
        API.addClass('active');
        let pathToDb = 'php/get_api.php';
        getData(pathToDb);
        return false;
    });

    function getData(pathToDb) {
        $.ajax({
            type: 'POST',
            url: pathToDb,
            success(ressponse) {
                if (ressponse) {
                    let res = JSON.parse(ressponse);
                    let date = res[0].date;
                    $('.date').text(date);
                    let temp = res[0].temp;
                    $('.current-temperature').text('').append(temp);
                    let weather = res[0].description;
                    $('.weather-icon').text('').append(weather);

                    let resLength = res.length;
                    let container = $('<div>');
                    for (let i = 0; i < resLength; i ++) {
                        let newDiv = $('<div>', {class: 'hourly-forecast clearfix'});
                        let itemDate = $('<div>', {class: 'forecast-date'});
                        let textForDate = res[i].time;
                        itemDate.text(textForDate);
                        newDiv.append(itemDate);

                        let section = $('<div>', {class: 'forecast-weather'});
                        let itemTemp = $('<div>', {class: 'forecast-temperature'});
                        let textTemp = res[i].temp;
                        itemTemp.append(textTemp);
                        section.append(itemTemp);

                        let itemIcon = $('<div>', {class: 'forecast-icon'});
                        let icon = res[i].description;
                        itemIcon.append(icon);
                        section.append(itemIcon);
                        newDiv.append(section);
                        container.append(newDiv);
                    }
                    $('.forecast').empty().append(container);
                }
            }
        });
    }
});
