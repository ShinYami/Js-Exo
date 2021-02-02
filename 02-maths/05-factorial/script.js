
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {

    // your code here
    let n = document.getElementById('number').value;

    function factorial(n) {
      let answer = 1;
      if (n == 0 || n == 1) {
        return answer;
      } else {
        for (var i = n; i >= 1; i--) {
          answer = answer * i;
        }
        return answer;
      }
    }
    answer = factorial(n);

  });

})();
