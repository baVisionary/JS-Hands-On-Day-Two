/* Create a function that writes 0-100 with some substitutions:
multiples of 3 replace with "Bing"
multiples of 5 replace with "Bong"
multiples of 3 & 5 reaplce with "Bing Bong"
*/

for (let i = 1; i < 100; i++) {
  let mark = ['',i];
  if (i % 5 ===0) {
    mark.splice(0,0,"Bong ");
  }
  if (i % 3 ===0) {
    mark.splice(0,0,"Bing ");
  }
  console.log(mark[0] + mark[1]);
}
