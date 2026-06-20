// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
});

// Simple animation on load
window.addEventListener("load",()=>{
    document.querySelector(".hero h1").style.opacity = 1;
});