window.onload = function() {

  function onsubmitForm() {
    if(document.pressed == 'sell') {
      document.itemForm.action = 'post/Available?_method=POST'
    }
    else if(document.pressed == 'want') {
      document.itemForm.action = 'post/Wanted?_method=POST'
    }
    // else if(document.pressed == 'both') {
    //   document.itemForm.action = 'post/Wanted?_method=POST'
    // }
    return true;
  }

}
