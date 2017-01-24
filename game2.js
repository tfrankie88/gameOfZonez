$(document).ready(function() {

// Set array out of order
var zonin = [
  'zone-3',
  'zone-2',
  'zone-1',
  'zone-4'
];
// Set a starter for a counter
var findFirst = 0;

// Run a for loop for mouseenter, to view each div and seeing if it the correct zone

$('.zone').on('mouseenter', function() {
    // console.log("Focused on the input");
  if(zonin[findFirst] === $(this).attr('id')) {
    $(this).css ({
      'background-color': '#3AE887',
      'border': 'solid rgba(29, 117, 68, .0)',
    })
  } else {
    $(this).css ({
      'background-color': '#FF4330',
      'border': 'solid rgba(29, 117, 68, .0)',
    })
  }
});

$('.zone').on('mouseleave', function() {
  $(this).removeAttr('style');
});


// Set a green correct if statement if the correct spot in the array has been slected
$('.zone').on('click', function() {
  if(zonin[findFirst] === $(this).attr('id')) {
    $(this).css ({
      'background-color': '#3AE887',
      'border': 'solid rgba(29, 117, 68, .0)',
    })
// Add a counter to move the
    findFirst++;
    $(this).off('mouseenter');
    $(this).off('mouseleave');
  }
});

var count = 0;

$('.zone').on('click', function() {
  count += 1;
  if(count === 4) {
      alert('Congrats!');
}
});

});
