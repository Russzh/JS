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