document.addEventListener("DOMContentLoaded", function () {
   const rose = document.querySelector(".rose");

   setInterval(() => {
      let x = (Math.random() * 10) - 5;
      let y = (Math.random() * 10) - 5;
      rose.style.transform = `translate(${x}px, ${y}px)`;
   }, 2000);
});