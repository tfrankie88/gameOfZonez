$(document).ready(function() {

  var array = ['zone-3', 'zone-2', 'zone-1', 'zone-4'];

  $('.zone').on('mouseenter', function() {
      // console.log("Focused on the input");
    $(this).css ({
    'background-color': '#3AE887',
    'border-radius': '5px',
    'border': 'solid rgba(29, 117, 68, .0)',
    })
  });

  $('.zone').on('mouseleave', function() {
      $(this).removeAttr('style');
  });

  $('.zone').on('click', function() {
    $(this).css ({
    'background-color': '#3AE887',
    'border-radius': '5px',
    'border': 'solid rgba(29, 117, 68, .0)',
  });
    $(this).off('mouseleave');
    $(this).off('click');
  });

var count = 0;

  $('.zone').on('click', function() {
    count += 1;
    if(count === 4) {
        alert('Congrats!');
  }
});


});
