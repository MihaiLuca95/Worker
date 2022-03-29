const processData = arrOfNum => {
    return arrOfNum.reduce((prev, next) => prev + next);
}

onmessage = (arr) => {
    console.log(arr.data);
    const result = processData(arr.data)
    if(!isNaN(result)) {
        postMessage(`Result is: ${result}`);
    } else {
        postMessage('Please enter an array with numbers')
    }
}
