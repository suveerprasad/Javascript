function gameon(){
    const element = document.querySelector('.game-but');
    if(!element.classList.contains('is-toggled')){
        element.classList.add('is-toggled');
    }else{
        element.classList.remove('is-toggled');
    }
}

function musicon(){
    const element = document.querySelector('.music-but');
    if(!element.classList.contains('is-toggled')){
        element.classList.add('is-toggled');
    }else{
        element.classList.remove('is-toggled');
    }
}

function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {
  
      turnOffPreviousButton();
  
      button.classList.add('is-toggled');
    } else {
      button.classList.remove('is-toggled');
    }
  }
  
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }

