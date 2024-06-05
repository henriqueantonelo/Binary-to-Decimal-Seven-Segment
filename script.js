// 2^*TH
// 2 ** e * 1
var sum = 0;

const binToDec = function (e) {
  var eStr = e.toString();
  for (let i = eStr.length - 1; i >= 0; i--) {
    if (eStr[i] == 1) {
      sum += 2 ** (eStr.length - 1 - i);
    }
  }

  console.log(sum);
};

binToDec("");

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const G = document.getElementById("G");

function loopWithDelay() {
  let i = 0;

  function iterate() {
    i = (i + 1) % 10;
    if (sum >= 9) {
      sum = -1;
    }
    // console.log(sum + 1);
    binToDec(1);

    setTimeout(iterate, 500); // Chama iterate novamente após 3 segundos
    if (sum === 1) {
      C.classList.add("segment-on");
      E.classList.add("segment-on");

      A.classList.remove("segment-on");
      B.classList.remove("segment-on");
      D.classList.remove("segment-on");
      F.classList.remove("segment-on");
      G.classList.remove("segment-on");
    } else if (sum === 2) {
      A.classList.add("segment-on");
      E.classList.add("segment-on");
      D.classList.add("segment-on");
      F.classList.add("segment-on");
      G.classList.add("segment-on");

      C.classList.remove("segment-on");
    } else if (sum === 3) {
      A.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      E.classList.add("segment-on");
      G.classList.add("segment-on");

      F.classList.remove("segment-on");
    } else if (sum === 4) {
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      E.classList.add("segment-on");

      A.classList.remove("segment-on");
      G.classList.remove("segment-on");
    } else if (sum === 5) {
      A.classList.add("segment-on");
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      G.classList.add("segment-on");

      E.classList.remove("segment-on");
    } else if (sum === 6) {
      A.classList.add("segment-on");
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      F.classList.add("segment-on");
      G.classList.add("segment-on");
    } else if (sum === 7) {
      A.classList.add("segment-on");
      C.classList.add("segment-on");
      E.classList.add("segment-on");

      B.classList.remove("segment-on");
      D.classList.remove("segment-on");
      F.classList.remove("segment-on");
      G.classList.remove("segment-on");
    } else if (sum === 8) {
      A.classList.add("segment-on");
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      E.classList.add("segment-on");
      F.classList.add("segment-on");
      G.classList.add("segment-on");
    } else if (sum === 9) {
      A.classList.add("segment-on");
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      D.classList.add("segment-on");
      E.classList.add("segment-on");
      G.classList.add("segment-on");

      F.classList.remove("segment-on");
    } else if (sum === 0) {
      A.classList.add("segment-on");
      B.classList.add("segment-on");
      C.classList.add("segment-on");
      E.classList.add("segment-on");
      F.classList.add("segment-on");
      G.classList.add("segment-on");

      D.classList.remove("segment-on");
    } else {
      A.classList.remove("segment-on");
      B.classList.remove("segment-on");
      C.classList.remove("segment-on");
      D.classList.remove("segment-on");
      E.classList.remove("segment-on");
      F.classList.remove("segment-on");
      G.classList.remove("segment-on");
    }
  }

  iterate(); // Inicia a primeira iteração
}
loopWithDelay();

// if (sum === 1) {
//   C.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";

//   A.style.backgroundColor = "rgb(50, 0, 0)";
//   B.style.backgroundColor = "rgb(50, 0, 0)";
//   D.style.backgroundColor = "rgb(50, 0, 0)";
//   F.style.backgroundColor = "rgb(50, 0, 0)";
//   G.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 2) {
//   A.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   F.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";

//   C.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 3) {
//   A.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";

//   F.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 4) {
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";

//   A.style.backgroundColor = "rgb(50, 0, 0)";
//   G.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 5) {
//   A.style.backgroundColor = "red";
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";

//   E.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 6) {
//   A.style.backgroundColor = "red";
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   F.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";
// } else if (sum === 7) {
//   A.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";

//   B.style.backgroundColor = "rgb(50, 0, 0)";
//   D.style.backgroundColor = "rgb(50, 0, 0)";
//   F.style.backgroundColor = "rgb(50, 0, 0)";
//   G.style.backgroundColor = "rgb(50, 0, 0)";
// } else if (sum === 8) {
//   A.style.backgroundColor = "red";
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";
//   F.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";
// } else if (sum === 9) {
//   A.style.backgroundColor = "red";
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   D.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";

//   F.style.backgroundColor = "rgb(50, 0, 0)";
// } else {
//   A.style.backgroundColor = "red";
//   B.style.backgroundColor = "red";
//   C.style.backgroundColor = "red";
//   E.style.backgroundColor = "red";
//   F.style.backgroundColor = "red";
//   G.style.backgroundColor = "red";

//   D.style.backgroundColor = "rgb(50, 0, 0)";
// }
