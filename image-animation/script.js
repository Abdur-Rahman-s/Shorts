// const img = document.querySelector('img');

// img.addEventListener('mousemove', (e) => {

//       const rect = img.getBoundingClientRect();
//       const x = e.clientX - rect.left; 
//       const y = e.clientY - rect.top;  


//       const skewX = (x - rect.width / 2) / 25; 
//       const skewY = (y - rect.height / 2) / 25; 
//       const moveX = (x - rect.width / 2) / 15; 
//       const moveY = (y - rect.height / 2) / 15; 

//       img.style.transform = `translate(${moveX}px, ${moveY}px) skew(${skewX}deg, ${skewY}deg) rotate(${moveX / 10}deg)`;
// });

// img.addEventListener('mouseleave', () => {
//       img.style.transform = 'translate(0, 0) skew(0, 0) rotate(0)';
// });
