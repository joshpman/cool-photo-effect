const width = document.documentElement.clientWidth;
let isMouseDown = false;
let prevPos = 0;
let currentTranslate = 0;
const gallery = document.getElementById("gallery__wrapper");
document.onmousemove = e =>{
    if(isMouseDown){
        const mouseDelta = (e.clientX - startPos);
        gallery.style.transform = `translate(${currentTranslate + mouseDelta}px, -50%)`;
        prevPos = currentPos;
    }
}
document.addEventListener('mousedown', e=>{
    if(e.button===0){
        isMouseDown= true;
        startPos = e.clientX;
    }
});
document.addEventListener('mouseup', e=>{
    if(e.button === 0){
        isMouseDown = false;
        currentTranslateX += e.clientX - startPos;
    }
});

/*translate centers element inside of parent, (x-offset, y-offset)*/
//transform: translate(0%, -50%);