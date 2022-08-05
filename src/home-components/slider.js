import pic0 from  "../img/slide0.JPG";
import pic1 from  "../img/slide1.JPG";
import pic2 from  "../img/slide2.JPG";
import pic3 from  "../img/slide3.JPG";
import pic4 from  "../img/slide4.JPG";
import pic5 from  "../img/slide5.JPG";
import pic6 from  "../img/slide6.JPG";
import pic7 from  "../img/slide7.JPG";
import pic8 from  "../img/slide8.JPG";
import {useState, useEffect, useRef} from "react";

const featuredProducts =[
    pic0,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8
];
let count= 0;
let slideInterval;
export default function Slider(){
    const [currentIndex, setCurrentIndex]=useState(0);

    const slideRef =  useRef();
//remove animation when mouse enters slider
    const removeAnimation = ()=>{
        slideRef.current.classList.remove('fade-anim');
    }

    useEffect(()=>{
       slideRef.current.addEventListener('animationend', removeAnimation)
       slideRef.current.addEventListener('mouseenter', pauseSlider);
       slideRef.current.addEventListener('mouseleave', startSlider);
      
       
     startSlider()
     return () =>{
         pauseSlider();
     }
    },[]);
   
    // function to start carousel on load
    const startSlider = () => {
      slideInterval = setInterval(() => {
            handleonNextClick();
            
          
        }, 5000);
    };
 const pauseSlider = () =>{
     clearInterval(slideInterval);
 }
 // on next click handler
    const handleonNextClick =() =>{
    count = (count + 1)% featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
}
// on previous click handler
    const handleonPrevClick =() =>{
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1)% productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');

    }
    return (
    <div ref = {slideRef} className=" w-full h-44 md:h-60 select-none relative ">
    <div className="aspect-w-16 aspect-h-9 ">
        <img src={featuredProducts[currentIndex]} className="md:h-72 h-full w-full rounded-md object-cover overflow-hidden absolute" alt=""/>
        
    </div>
<div className="absolute w-full top-2/4 px-3 flex justify-between items-center">
<button onClick={handleonPrevClick} className="bg-black text-white p-1 rounded-md bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" ><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg></button>
<button onClick={handleonNextClick} className="bg-black text-white p-1 rounded-md bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg></button>
</div>
    </div>
    )}
    