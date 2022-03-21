var index=1;
changeImage = function(){
var imgs = ["./image/post2.jpg","./image/post3.jpg","./image/post4.jpg","./image/post5.jpg"];
document.getElementById('body_silde-image').scr = imgs[index];
index++;
    if(index==4){
        index=0;
    }
}
setInterval(changeImage,1000);