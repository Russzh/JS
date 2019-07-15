let inputRub = document.getElementById('rub'),
    inpurUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', '../Ajax/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send();

    ///св-ва
    ///status - код ответа сервера
    ///statusText - текстовое описание статуса от сервера
    ///responseText  /  response - Текст ответа сервера
    ///readyState - текущее состояние запроса

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response); //response - oтвет от сервера (JSON объект)
            
            inpurUsd.value = inputRub.value / data.usd;
        } else {
            inpurUsd.value = "Error";
        }
    });
    
});