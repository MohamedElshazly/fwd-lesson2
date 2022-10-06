const fs = require('fs')

setTimeout(() => {
    console.log("Print Fifth");
}, 5000)

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log("Print Third");
    }, 0)
    
    setImmediate(() => {
        console.log('Print Second'); 
    })
})


console.log('Print First');

setTimeout(() => {
    console.log("Print Forth");
}, 3000)
