//fetch – это XMLHttpRequest нового поколения
//fetch возвращает промис, который, когда получен ответ,
//выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался
'use strict'

let status = function(response) {
    if (response.status != 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}

let json = function (response) {
    return response.json()
}

fetch('http://www.mocky.io/v2/594e5ae0110000a019d6d3c8')
// method
// headers – заголовки запроса (объект),
// body – тело запроса: FormData, Blob, строка и т.п.
// mode - «same-origin», «no-cors», «cors»
    .then(status)
    .then(json)
    .then(function (data) {
        console.log('data', data);
    })
    .catch(function (error) {
        console.log('error', error)
    })