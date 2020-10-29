var header = document.getElementById('topHeader');
var header2 = document.getElementById('topHeader2');
var navText = document.getElementById('myName');



var height = window.innerHeight;
var width = window.innerWidth;

console.log('Height: ', height, 'Width: ', width);

if(width <= 995){
    header.classList.add('hidden');
    header2.classList.add('hidden');

    console.log('Inside if statement.');
    navText.classList.remove('hidden');
}
else{
    header.classList.remove('hidden');
    header2.classList.remove('hidden');
    navText.classList.add('hidden');

}

$(window).resize(function() {
    var height = window.innerHeight;
    var width = window.innerWidth;

    console.log('Height: ', height, 'Width: ', width);

    if(width <= 995){
        header.classList.add('hidden');
        header2.classList.add('hidden');

        console.log('Inside if statement.');
        navText.classList.remove('hidden');
    }
    else{
        header.classList.remove('hidden');
        header2.classList.remove('hidden');
        navText.classList.add('hidden');

    }
  });