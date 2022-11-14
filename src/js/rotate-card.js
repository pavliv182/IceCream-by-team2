(() =>{
    const rotateBeginButtons = document.querySelectorAll(".js-rotate-button-f");
    for(let i = 0; i < rotateBeginButtons.length; i++){
        rotateBeginButtons[i].onclick = () =>{
            const winNum = rotateBeginButtons[i].dataset.window;
            const frontWindows = document.querySelectorAll(".products-card-list__color-box--front");
            const backWindows = document.querySelectorAll(".products-card-list__color-box--back");
            for(let j = 0; j < frontWindows.length; j++){
                if(frontWindows[i].dataset.window == winNum){
                    frontWindows[i].classList.toggle('products-card-list__color-box--turned');
                    backWindows[i].classList.toggle('products-card-list__color-box--back--turned');
                }
            }
        }
    }
    const rotateEndButtons = document.querySelectorAll(".js-rotate-button");
    for(let i = 0; i < rotateEndButtons.length; i++){
        rotateEndButtons[i].onclick = () =>{
            const winNum = rotateEndButtons[i].dataset.window;
            const frontWindows = document.querySelectorAll(".products-card-list__color-box--front");
            const backWindows = document.querySelectorAll(".products-card-list__color-box--back");
            for(let j = 0; j < frontWindows.length; j++){
                if(frontWindows[i].dataset.window == winNum){
                    frontWindows[i].classList.toggle('products-card-list__color-box--turned');
                    backWindows[i].classList.toggle('products-card-list__color-box--back--turned');
                }
            }
        }
    }
})()

