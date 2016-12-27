$(document).ready(function() {
  
  baseGrid();
  hover();


  $('#new').on('click', function() {
    reset();
    num = parseInt(prompt('Enter a number (n) between 1-30, where n is the number of tiles per row'));
    if (num >= 1 && num <= 30 ) {
      createGrid();
    } else if (num < 1 || num > 30) {
      num = prompt('Uh-oh. Kindly enter a number between 1-30');
      createGrid();
    } else if (num.isNaN) {
      alert('That\'s not a number!')
      num = prompt('That\'s not a number. Kindly enter a number between 1-30');
      createGrid();
    }
  });

  $('#reset').on('click', function() {
    $('.grid').effect('shake', {distance: 10, times: 2});
    $('.square').css({'background-color': '#818886'});
  });

  $('#random').on('click', function() {
    randomColor();
  });

  clickme();
});

function clickme () {
  $('.square').on('click', function() {
    $(this).css({'background-color': 'white'});
    $(this).append('<div class=image></div>');
  });
}


function reset() {
  $('.grid').children().remove();
}

function baseGrid () {
  num = 16;
  total = num * num;
  for(i = 0; i < total; i++) {
    $('.grid').append('<div class=square></div>');
  }
  margin = 2 * num;
  squareWidth = ($('.square').width()); 
  testWidth = (squareWidth * num);
  gridWidth = (squareWidth * num) + margin;
  dimension = $('.grid').css({'max-width': gridWidth +'px', 'max-height': gridWidth + 'px'});
}

function hover() {
  $('.square').hover(function() {
    $(this).css({'background-color': 'yellow'}).fadeOut(200).fadeIn(250);
  });
}

function createGrid() {

  gridWidth = 512;
  margin = 2 * num;
  total = num * num;
  squareWidth = (gridWidth - margin) / num;
  dimension = $('.grid').css({'max-width': '512px', 'max-height': '512px'});

  for(i = 0; i < total; i++) {
    $('.grid').append('<div class=square></div>');
  }
  
  $('.square').css({'width': squareWidth + 'px', 'height': squareWidth + 'px'});

  hover();
  clickme();
}

function randomColor() {
  $('.square').hover(function() {
    colorArray = ['#830012', '#BF001A', '#EE213D', '#F48493', '#FFB789','#FA7722', '#C94F00', '#8A3600', '#005847', '#008168', '#16A085', '#5DAD9D', '#9EA1A0', '#D3D5D2', '#8FDC77', '#29AB00', '#FAEE22'];
    color = colorArray[Math.floor(Math.random() * colorArray.length)];
      $(this).css({'background-color': color});
  });
}