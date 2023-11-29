window.onload = function() {
  KronometreMain();
}

function KronometreMain() {
  let zaman, intervalId;
  let KronometreBaslatBtn = document.getElementById("KronometreBaslatBtn");
  let KronometreDurdurBtn = document.getElementById("KronometreDurdurBtn");

  KronometreBaslatBtn.addEventListener("click", function() {
    zaman = -1;
    incrementTime();
    intervalId = setInterval(incrementTime, 1000);
    KronometreBaslatBtn.disabled = true;
    KronometreDurdurBtn.disabled = false;
  });

  KronometreDurdurBtn.addEventListener("click", function() {
    clearInterval(intervalId);
    KronometreBaslatBtn.disabled = false;
    KronometreDurdurBtn.disabled = true;
  });

  function incrementTime() {
    zaman++;
    document.getElementById("zaman").textContent =
      ("0" + Math.trunc(zaman / 60)).slice(-2) +
      ":" + ("0" + (zaman % 60)).slice(-2);
  }
}