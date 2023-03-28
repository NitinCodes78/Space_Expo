const planets=document.querySelectorAll('.planets li a');
for(let i of planets){
    i.addEventListener("click",function(){
      for(let j of planets){
         j.style.borderBottom="none";    
     }
        if(i.textContent==="Mars"){
            i.style.borderBottom="3px solid white";
            i.style.paddingBottom="8px";   
            document.querySelector('.main-box h1').innerHTML='Mars';
            document.querySelector('.main-box p').innerHTML='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
            document.querySelector('.image img').src="Images/image-mars.png";
            document.querySelector('.box1 h1').innerHTML='225 MIL. KM';
            document.querySelector('.box2 h1').innerHTML='9 MONTHS';       
        }
        if(i.textContent==="Moon"){
            i.style.borderBottom="3px solid white";
            i.style.paddingBottom="8px";  
            document.querySelector('.main-box h1').innerHTML='Moon';
            document.querySelector('.main-box p').innerHTML='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
            document.querySelector('.image img').src="Images/image-moon.png";
            document.querySelector('.box1 h1').innerHTML='384,400 KM';
            document.querySelector('.box2 h1').innerHTML='3 DAYS';
        }
        if(i.textContent==="Europa"){
            i.style.borderBottom="3px solid white";
            i.style.paddingBottom="8px";  
            document.querySelector('.main-box h1').innerHTML='Europa';
            document.querySelector('.main-box p').innerHTML='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            document.querySelector('.image img').src='Images/image-europa.png';
            document.querySelector('.box1 h1').innerHTML='628 MIL. KM';
            document.querySelector('.box2 h1').innerHTML='3 YEARS';
        }
        if(i.textContent==="Titan"){
            i.style.borderBottom="3px solid white";
            i.style.paddingBottom="8px";  
            document.querySelector('.main-box h1').innerHTML='Titan';
            document.querySelector('.main-box p').innerHTML='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
            document.querySelector('.image img').src='Images/image-titan.png';
            document.querySelector('.box1 h1').innerHTML='1.6 BIL. KM';
            document.querySelector('.box2 h1').innerHTML='7 YEARS';
        }
    })
}