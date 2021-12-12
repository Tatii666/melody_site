$(document).ready(function() {
    let currentFloor = 2;
    let floorPath = $(".home-img path"); //каждый отдельный этаж в SVG
    let counterUp = $(".button-up"); /*кнопка увеличения этажа */
    let counterDown = $(".button-down"); /*кнопка уменьшения этажа */

    /*функция при наведении мышью на этаж */
    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor"); /*удаляем активный класс у этажей */
        currentFloor = $(this).attr("data-floor"); /*получаем значение текушего этажа */
        $(".counter").text(currentFloor); /*записываем значение этажа в счетчик справа */
    });

    counterUp.on("click", function() { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor); //фопматирование переменной с 1 на 01
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor"); //подсветка для нействуюшего этажа
        }
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});