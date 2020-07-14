export function demoPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('HAHAH!')),500)
    })
    promise.catch(error => { console.log(error);});
}