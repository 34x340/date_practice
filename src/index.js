// const promise = new Promise((resolve,reject) => {
//     // resolve(10)
//     // reject('text')
//     const isFullField = Math.random() > 0.5 
//     if (isFullField) {
//         resolve('its ok')
//     }
//     reject ('something wrong')
// })

// console.log(promise)

// promise 
//     .then(result => {
//         console.log('result', result)
//         return 5
//     })
//     .then(data => {
//         console.log(data)
//         throw new Error
//         return data
//     })
//     .then(res => console.log(res))
//     .catch(error=>console.log(error))
//     .finally(()=>{console.log('i always work');})
 
    // Напишіть функцію, яка повертає проміс
    // який виконується через певний час (наприклад, 2 секунди)
    //  і повертає повідомлення "Проміс виконано".

// const promise = new Promise ((resolve, reject) => { 
//     resolve(10)
// })
// .then((massege) => {
//     console.log(massege)
// })

// 2222222222222222222222222222222222222

function arrayChecking (arr) {
    const everyNum = arr.every((num) => {
        return num % 2 === 0;
    })
}

return new Promise((resolve, reject) => {
    if(everyNum) {
        resolve('correct')
    }
    else{
        reject("no")
    }
})

arrayChecking([2,4,5])
.then((result) => {
    console.log(result)
})
.catch((error)=> {
    console.log(error)
})