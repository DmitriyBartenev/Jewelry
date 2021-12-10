window.onload = function () {
    var box=document.getElementsByClassName('card');
    var btn=document.getElementById('more-button');
    for (let i=6;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 6;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('card');
        countD += 6;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }
    })
}
let but = document.getElementById('more-button');
but.addEventListener("click", function(){
    but.style.display = "none";
})
