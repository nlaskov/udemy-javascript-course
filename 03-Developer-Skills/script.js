// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [17, 21, 23];

function printForecast(arr) {
  let str = "";

  for (let i = 0; i < temperatures.length; i++) {
    str += `... ${temperatures[i]}C in ${i + 1} days`;
  }

  console.log(str);
  return str;
}
