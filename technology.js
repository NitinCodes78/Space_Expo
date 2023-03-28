if(window.matchMedia('(max-width: 1250px)').matches)
  document.querySelector('img.photo').src="Images/image-launch-vehicle-landscape.jpg";
const tech=document.querySelectorAll('.div');
for(let i of tech){
    i.addEventListener("click",function(){
         for(let j of tech){
            j.style.backgroundColor="transparent";
            j.style.color="white";
         }
         if(i.classList.contains('div-1')){
            i.style.backgroundColor="white";
            i.style.color="black";
            document.querySelector('.text .name').innerHTML='LAUNCH VEHICLE';
            document.querySelector('.text .dis').innerHTML=`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
          if(window.matchMedia('(min-width: 1250px)').matches)
            document.querySelector('.photo').src='Images/image-launch-vehicle-portrait.jpg';
          else
            document.querySelector('img.photo').src="Images/image-launch-vehicle-landscape.jpg";
         }          
         if(i.classList.contains('div-2')){
            i.style.backgroundColor="white";
            i.style.color="black";
            document.querySelector('.text .name').innerHTML='SPACEPORT';
            document.querySelector('.text .dis').innerHTML=`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
          if(window.matchMedia('(min-width: 1250px)').matches)
            document.querySelector('.photo').src='Images/image-spaceport-portrait.jpg';
          else
            document.querySelector('img.photo').src='Images/image-spaceport-landscape.jpg';
         }          
         if(i.classList.contains('div-3')){
            i.style.backgroundColor="white";
            i.style.color="black";
            document.querySelector('.text .name').innerHTML='SPACE CAPSULE';
            document.querySelector('.text .dis').innerHTML=`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
          if(window.matchMedia('(min-width: 1250px)').matches)
            document.querySelector('.photo').src='Images/image-space-capsule-portrait.jpg';
          else
            document.querySelector('img.photo').src='Images/image-space-capsule-landscape.jpg';
         }          
    });
}