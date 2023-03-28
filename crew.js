const crew=document.querySelectorAll('.dot');
for(let i of crew){
    i.addEventListener("click",function(){
        for(let j of crew){
            j.style.backgroundColor="#36373f";
        }
    if(i.classList.contains('dot-1')){
        document.querySelector('.person .post').innerHTML='COMMANDER';
        document.querySelector('.person .name').innerHTML='DOUGLAS HURLEY';
        document.querySelector('.person .bio').innerHTML='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
        document.querySelector('.image img').src='Images/image-douglas-hurley.png';
        i.style.backgroundColor="white";
    }
    if(i.classList.contains('dot-2')){
        document.querySelector('.person .post').innerHTML='MISSION SPECIALIST';
        document.querySelector('.person .name').innerHTML='MARK SHUTTLEWORTH';
        document.querySelector('.person .bio').innerHTML='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
        document.querySelector('.image img').src='Images/image-mark-shuttleworth.png';
        i.style.backgroundColor="white";
    }
    if(i.classList.contains('dot-3')){
        document.querySelector('.person .post').innerHTML='PILOT';
        document.querySelector('.person .name').innerHTML='VICTOR GLOVER';
        document.querySelector('.person .bio').innerHTML='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.';
        document.querySelector('.image img').src='Images/image-victor-glover.png';
        i.style.backgroundColor="white";
    }
    if(i.classList.contains('dot-4')){
        document.querySelector('.person .post').innerHTML='FLIGHT ENGINEER';
        document.querySelector('.person .name').innerHTML='ANOUSHEH ANSARI';
        document.querySelector('.person .bio').innerHTML='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
        document.querySelector('.image img').src='Images/image-anousheh-ansari.png';
        i.style.backgroundColor="white";
    }
  });
}
