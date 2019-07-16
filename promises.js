function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            Math.random () > .5 ? resolve({}) : reject ('В визе отказано');
        }, 2000);
    });
    return promise;
}     

function getVisa(visa) {
    console.info('Виза получена');
    return new Promise(function(resolve, reject) {//or return visa;  or  return Promise.resolve(visa);
        setTimeout(() => resolve(visa), 2000) ;
    });
}
 
function bookHotel(visa) {
    console.log(visa);
    console.log('Book Hotel');
    return Promise.resolve(visa);
} 

function buyTicket(booking) { 
    console.log('Buy tickets');
    console.log('Бронь', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel) 
    .then(buyTicket)
    .catch(error => console.error(error));      


    /////Выполнение обещания после всех предыдущих
    function go(num) {
        return new Promise(function(resolve, reject){
            let delay = Math.ceil(Math.random() * 3000);
            console.log(num, delay);
            setTimeout(() => {
                if (delay > 2000)
                    reject(num);
                else 
                    resolve(num);
                }, delay);
        });
    }

    let p1 = go(1);
    let p2 = go(2);
    let p3 = go(3);

    Promise.all([p2, p1, p3])
    //Promise.race([p2, p1, p3]) - вывод первого сработавшего обещания
        .then (value => console.log(value))
        .catch(error => console.log(error));


