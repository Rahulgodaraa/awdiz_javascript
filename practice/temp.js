/*
You work in the weather department and have been tasked with tracking temperature fluctuations throughout the day. 
You start measuring when the temperature is exactly 0 degrees. From this point, the temperature can either rise or fall. 
Write a function findMax Temperature that takes an integer n, 
representing the number of temperature readings taken during the day,
 and an array TemperatureChange that indicates the change in temperature from one reading to the next.
  Your function should return the highest temperature reached during the day, after the measurement has started. 
  Note: Positive numbers in the TemperatureChange array represent an increase in temperature. 
  Negative numbers in the TemperatureChange array represent a decrease in temperature.
 The highest temperature can be at or below 0 degrees.
*/

const input = [0, -1, 10, 20, 25, 26, 19, 10, -10];
let TemperatureChange = [3, -5, 2, 1, -1, 3];
function MaxTemp(input) {
  let maxt = 0;
  for (let i of input) {
    let curt = i;
    maxt = Math.max(maxt, curt);
  }
  return maxt;
}
console.log('testcase1:' + '  ' + MaxTemp(input));
console.log('testcase2:' +'  ' +MaxTemp(TemperatureChange));
console.log('testcase3:' +'  ' +MaxTemp([-1, 2, -3, 4, 1]));
