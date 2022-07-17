//   loader starts
$(window).on("load",function(){
    $(".loader-container").fadeOut(1500);
});
// $(window).on("load",function(){
//     $("#loader2").fadeOut(2500);        
// });
    // cursor starts
   const cursor = document.querySelector('.cursor');
   document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
})