
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

  // to get the value of an input: document.getElementById("element-id").value

    // your code here
    let input = document.getElementById("number");
    document.getElementById("run").addEventListener("click", () => {
      let factorial = 1;
      for (let i = 1; i <= input.value; i++) {
        factorial *= i;
      }

      console.log(factorial);
      alert(factorial);
  });

})();
