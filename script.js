let isMouseDown = false;
let startPos = 0;
let currentTranslate = 0;
const gallery = document.getElementById("gallery__wrapper");
document.addEventListener('mousemove', e=>{
    if(isMouseDown){
        const mouseDelta = e.clientX - startPos;
        console.log(currentTranslate);
        gallery.style.transform = `translate(${currentTranslate + mouseDelta}px, -50%)`;
    }
})
document.addEventListener('mousedown', e=>{
    if(e.button===0){
        isMouseDown = true;
        startPos = e.clientX;
    }
});
document.addEventListener('mouseup', e=>{
    if(e.button === 0 && isMouseDown){
        currentTranslate += e.clientX - startPos;
        isMouseDown = false;
    }
});

/*translate centers element inside of parent, (x-offset, y-offset)*/
//transform: translate(0%, -50%);