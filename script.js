function showSet(setId) {
    var resoset = document.getElementById('reso');
    var meridiset = document.getElementById('meridi');
    var synset = document.getElementById('syn');

    var resosetting = resoset.style.display;
    var meridisetting = meridiset.style.display;
    var synsetting = synset.style.display;

    var resobut = document.getElementById('resobut');
    var meridibut = document.getElementById('meridibut');
    var synbut = document.getElementById('synbut');
  
    // show selected set
    if (setId === 'reso') {
        console.log('reso');
        if (resosetting == 'block') {
            resoset.style.display = 'none';
            resobut.innerHTML = 'View Resonanssi';
        }

        else {
            resoset.style.display = 'block';
            resobut.innerHTML = 'Hide Resonanssi';
        }
    }

    if (setId === 'meridi') {
        console.log('meridi');
        if (meridisetting == 'block') {
            meridiset.style.display = 'none';
            meridibut.innerHTML = 'View Meridiaani'
        }

        else {
            meridiset.style.display = 'block';
            meridibut.innerHTML = 'Hide Meridiaani'
        }
    }

    if (setId === 'syn') {
        console.log('syn');
        if (synsetting == 'block') {
            synset.style.display = 'none';
            synbut.innerHTML = 'View Synop'
        }

        else {
            synset.style.display = 'block';
            synbut.innerHTML = 'Hide Synop'
        }
    }
  }


function showCap(capId) {
    var cap = document.getElementById('cap' + capId);
    var capsetting = cap.style.display;
    var capbut = document.getElementById('cap' + capId)

    console.log('cap');
    if (capsetting == 'block') {
        cap.style.display = 'none';
        capbut.innerHTML = 'View caption';
    }

    else {
        cap.style.display = 'block';
        capbut.innerHTML = 'Hide caption';
    }
  }
