let ballimg=null;
ballimg=document.getElementById('anhbong');

//dung ham init() de khoi tao doi tuong tai vi tri bat dau
function init(){
    ballimg=document.getElementById('anhbong');
    ballimg.style.position='relative';
    ballimg.style.left='0px';
}

//dung ham moveRight de tang khoang cach trai 10px
function moveRigh(){
    ballimg.style.left=parseInt(ballimg.style.left)+10+'px';
}

//Goi ham init() khi trinh duyet duoc tai lan dau
window.onload = init;