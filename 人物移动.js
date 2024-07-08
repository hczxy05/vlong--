window.addEventListener('scroll',function(){
    var screen = window.scrollY
    var image = document.querySelector('#man')
    var maxLeft = '40%'
    if(screen > 0){
        var leftValue = Math.min(-screen / 5,parseInt(maxLeft))
        image.style.right = leftValue + 'px'
    }
    else{
        image.style.right = '40%'
    }

})