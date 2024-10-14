let now = new Date();
console.log(now)

// let specificDate1 = new Date("14-10-2024")
// console.log(specificDate1)

/* let specificDate2 = new Date("2024-10-13");
console.log(specificDate2);

let specificDate3 = new Date(2024, 10, 14, 10, 50, 30, 567)
console.log(specificDate3)

let fromEpoch = new Date(60000)
console.log(fromEpoch) */

/* const today = new Date();
console.table([
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getDay(),
    today.getHours(),
    today.getMinutes(),
    today.getSeconds(),
    today.getMilliseconds(),
    today.getTime()
]) */

/*     let date = new Date();
    date.setFullYear(2025);  // Change year to 2025
    date.setMonth(5);        // Change month to June (months are 0-based)
    date.setDate(15);        // Change day to 15th
    date.setHours(10);       // Change hours to 10 AM
    console.log(date); */

/* 
    let date = new Date();
    console.table([
        date.toString(),
        date.toDateString(),
        date.toTimeString(),
        date.toLocaleString(),

    ]) */

/*         let date1 = new Date("2024-10-01");
        let date2 = new Date("2024-10-13");
        
        let difference = date2 - date1;  // Difference in milliseconds
        console.log(difference);  */

        let date = new Date();
// console.log(date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
console.log(date.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}))
