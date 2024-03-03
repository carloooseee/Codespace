
// for(let i = 0; i < 10; i++){
//     for(let k = 0; k < i; i++){
//         console.log(k + 1 + " * ");
//     }
//     console.log(" ");
// };
function generatePyramid() {
    var totalNumberofRows = 5;
    var arr = new Array();
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
        arr.push(j);
        console.log(j);
      }
      console.log("\n");
    }
  }