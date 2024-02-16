let button = document.querySelector("button")
let imgSvg = document.querySelectorAll("input")
let svg = document.querySelectorAll(".svvvg")
let ezrt;
let trigger = false



svg.forEach(el => {
    window.addEventListener("mousedown", function(ele){
        trigger = true
        if(trigger){
            window.addEventListener("mousemove", function(e){
          
            
                 e.target.href.baseVal = ezrt
            
  
   
        })
    }
        
        
    
    })
    el.addEventListener("mouseup", function(e){
        trigger = false
    })
});

function tuile(){
    
}
imgSvg.forEach(el => {
    el.addEventListener("click", function(e){
       

    
     ezrt = e.target.value
    
     https://mobius-studios.gitbook.io/selectable/getting-started/demos/checkboxes
})
});

