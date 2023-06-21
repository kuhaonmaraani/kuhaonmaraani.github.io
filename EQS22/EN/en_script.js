function showCap(capId) {
    var cap = document.getElementById('cap' + capId);
    var capsetting = cap.style.display;
    var capbut = document.getElementById('capbut' + capId)

    if (capsetting == 'block') {
        cap.style.display = 'none';
        capbut.innerHTML = 'View caption';
    }

    else {
        cap.style.display = 'block';
        capbut.innerHTML = 'Hide caption';
    }
  };




