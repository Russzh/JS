async function getUser(id) {
    return { id: 1};
  //return Promise.resolve({ id: 1});//{ id: 1 }//async при возврате обещания не оборачивает его в другое обещание

}

let user = getUser(1);

console.log(user);//возвращает Promise c объектом
//getUser(1).then(user => console.log(user));//возвращает объект

/////////////////////////////////////////////

async function getUser(id) {
    return { id: 1};
}

async function main(){
    try {
        let user = await getUser(1); //можно использовать не только в async func, но и в func возвращающие promise
        console.log(user);
    } catch (error){
      //throw new Error('Описание');
        console.log(error);
    };
 
}

main();

//async IIFE и стрелочная

async function getUser(id) {
    return { id: 1};
}

(async () => {
    try {
        let user = await getUser(1); //можно использовать не только в async func, но и в func возвращающие promise
        console.log(user);
    } catch (error){
      //throw new Error('Описание');
        console.log(error);
    };
 
})();

// async можно использовать в методах объекта и класса как до названия метода, так и перед словом function в методе
//Работа async основа на обещаниях и генераторах
