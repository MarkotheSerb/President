var reset = document.querySelector('.reset');

var marScore = document.querySelector('#marScore');
var marPres = document.querySelector('#marPresident');
var marVP = document.querySelector('#marVP');
var marVB = document.querySelector('#marVB');
var marB = document.querySelector('#marB');

var mamaScore = document.querySelector('#mamaScore');
var mamaPres = document.querySelector('#mamaPresident');
var mamaVP = document.querySelector('#mamaVP');
var mamaVB = document.querySelector('#mamaVB');
var marmaB = document.querySelector('#mamaB');

var tataScore = document.querySelector('#tataScore');
var tataPres = document.querySelector('#tataPresident');
var tataVP = document.querySelector('#tataVP');
var tataVB = document.querySelector('#tataVB');
var marmaB = document.querySelector('#tataB');

var stefScore = document.querySelector('#stefScore');
var stefPres = document.querySelector('#stefPresident');
var stefVP = document.querySelector('#stefVP');
var stefVB = document.querySelector('#stefVB');
var stefB = document.querySelector('#stefB');

var marScoreVal = 0;
var mamaScoreVal = 0;
var tataScoreVal = 0;
var stefScoreVal = 0;

marScore.value = marScoreVal;
mamaScore.value = mamaScoreVal;
tataScore.value = tataScoreVal;
stefScore.value = stefScoreVal;



reset.addEventListener('click', function() {
  marScoreVal = 0;
  mamaScoreVal = 0;
  tataScoreVal = 0;
  stefScoreVal = 0;

  marScore.value = marScoreVal;
  mamaScore.value = mamaScoreVal;
  tataScore.value = tataScoreVal;
  stefScore.value = stefScoreVal;
})


marPres.addEventListener('click', function() {
   marScoreVal = marScoreVal + 4;
   marScore.value = marScoreVal;
})

marVP.addEventListener('click', function() {
    marScoreVal = marScoreVal + 3;
    marScore.value = marScoreVal;
 })

 marVB.addEventListener('click', function() {
    marScore.value = marScoreVal;
    marScoreVal = marScoreVal + 2;
    marScore.value = marScoreVal;
 })

 marB.addEventListener('click', function() {
    marScoreVal = marScoreVal + 1;
    marScore.value = marScoreVal;
 })



 mamaPres.addEventListener('click', function() {
    mamaScoreVal = mamaScoreVal + 4;
    mamaScore.value = mamaScoreVal;
 })
 
 mamaVP.addEventListener('click', function() {
     mamaScoreVal = mamaScoreVal + 3;
     mamaScore.value = mamaScoreVal;
  })
 
  mamaVB.addEventListener('click', function() {
    mamaScoreVal = mamaScoreVal + 2;
    mamaScore.value = mamaScoreVal;
  })
 
  mamaB.addEventListener('click', function() {
    mamaScoreVal = mamaScoreVal + 1;
    mamaScore.value = mamaScoreVal;
  })



  stefPres.addEventListener('click', function() {
    stefScoreVal = stefScoreVal + 4;
    stefScore.value = stefScoreVal;
 })
 
 stefVP.addEventListener('click', function() {
    stefScoreVal = stefScoreVal + 3;
    stefScore.value = stefScoreVal;
  })
 
  stefVB.addEventListener('click', function() {
    stefScoreVal = stefScoreVal + 2;
    stefScore.value = stefScoreVal;
  })
 
stefB.addEventListener('click', function() {
    stefScoreVal = stefScoreVal + 1;
    stefScore.value = stefScoreVal;
  })



  tataPres.addEventListener('click', function() {
    tataScoreVal = tataScoreVal + 4;
    tataScore.value = tataScoreVal;
 })
 
 tataVP.addEventListener('click', function() {
    tataScoreVal = tataScoreVal + 3;
    tataScore.value = tataScoreVal;
  })
 
  tataVB.addEventListener('click', function() {
    tataScoreVal = tataScoreVal + 2;
    tataScore.value = tataScoreVal;
  })
 
  tataB.addEventListener('click', function() {
    tataScoreVal = tataScoreVal + 1;
    tataScore.value = tataScoreVal;
  })

  if (tataScoreVal > (mamaScoreVal && stefanScoreVal && marScoreVal)) {
    tataScore.value = 40;

    /*
    changeBgColor('#90EE90');
    */
  
/*
  function changeBgColor(color) {
    document.getElementById('tataScore').style.background = color;
  }
  */


  
