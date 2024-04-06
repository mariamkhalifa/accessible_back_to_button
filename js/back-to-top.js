(()=>{
  "use strict"

  document.addEventListener('DOMContentLoaded', ()=>{
    
    let el = document.querySelector('.back-to-top');
    
    // handle mouse click
    el.addEventListener('click', ()=>{
      window.scroll({
        top: 0,
        bottom: 0,
        behavior: 'smooth'
      });
    });

    // handle keypress
    el.addEventListener('keydown', (e)=>{
      
      if(e.code === 'Enter' || e.code === 'Space') {
        window.scroll({
          top: 0,
          bottom: 0,
          behavior: 'smooth'
        });
        document.querySelector('.skip-link').focus();
      }
    });
  });
})();