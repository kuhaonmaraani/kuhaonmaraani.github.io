function showSet(setId) {
    // hide all sets
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
