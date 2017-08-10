console.log('Loaded!');
var element=document.getElementById('main_text');
element.innerHTML='My madi';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
   marginLeft=marginLeft+5;
   img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(marginRight,50);
};