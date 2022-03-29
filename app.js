let arrdata = [3,4,5,6,7];
let worker = new Worker('worker.js');

worker.postMessage(arrdata)

worker.onmessage = (sum) => {
    console.log(sum.data);
}


