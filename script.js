var checkboxes = document.getElementsByTagName('input');
var shiftKey = false;
var Index1;
var Index2;
var lastChecked = false;

function onClickCheck(checkbox) {

  if (shiftKey) {


    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes.item(i) == checkbox)
        Index2 = i;
    }



    if (!checkboxes.item(Index2).checked) {
      if (Index1 < Index2 || lastChecked > Index2) {
        for (let i = Index2; i <= lastChecked; i++)
          checkboxes.item(i).checked = false;
        return;
      }
      else if (Index1 > Index2 || Index2 == Index1) {
        for (let i = lastChecked; i <= Index2; i++)
          checkboxes.item(i).checked = false;
        return;
      }


    }


    if (Index1 < Index2) {

      for (let i = Index1; i <= Index2; i++)
        checkboxes.item(i).checked = true;
      lastChecked = Index2;
    }
    else {

      for (let i = Index1; i >= Index2; i--)
        checkboxes.item(i).checked = true;
      lastChecked = Index2;

    }

  }

  else {

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes.item(i) == checkbox) {
        Index1 = i;
      }
    }
  }

}


document.addEventListener('keydown', function (event) {
  if (event.keyCode == "16")
    shiftKey = true;
});

document.addEventListener('keyup', function (event) {
  if (event.keyCode == "16")
    shiftKey = false;
});










