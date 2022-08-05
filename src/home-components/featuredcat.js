import Pic1 from "../img/blk.jpg";
import Pic2 from "../img/pic24.jpg";
import Pic3 from "../img/pic2.jpg";
import Pic4 from "../img/pic25.jpg";
import Pic5 from "../img/pic4.jpg";
import Pic6 from "../img/pic12.jpg";
import Pic7 from "../img/pic13.jpg";
import Pic8 from "../img/pic10.jpg";
import Pic9 from "../img/car.jpg";
import Pic10 from "../img/car1.png";
import Pic11 from "../img/car2.jpg";
import Pic12 from "../img/pic18.jpg";
import Pic13 from "../img/pic19.jpg";
import Pic14 from "../img/pic14.jpg";
import Pic15 from "../img/pic21.jpg";
import Pic16 from "../img/pic22.jpg";
import Pic17 from "../img/pic5.jpg";
import Pic18 from "../img/pic3.jpg";
import Pic19 from "../img/pic17.jpg";
import Laptop from "../img/laptop.jpg";

const Featuredcat = ()=>{
    return(
        <div className="p-4 m-2 space-y-4">

            <h1 className="text-2xl text-center font-bold">Featured Categories</h1>
            <div className="grid grid-cols-4 gap-2">
            <a href="/" className="col-span-1 row-span-2 relative">
                <img src={Pic1} className="h-full object-cover"alt=""/>
                <h1 className="absolute top-6 left-2 text-2xl font-bold">Fashion</h1>
                <div className="absolute bottom-4 grid grid-cols-2 h-2/5 gap-1 p-2">
                    <img src={Pic19} className="col-span-1 row-span-2 h-full object-cover" alt=""/>
                    <img src={Pic12} className="col-span-1 h-full object-cover " alt=""/>
                    <img src={Pic13} className="col-span-1 h-full object-cover" alt=""/>

                </div>
            </a>
            <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                <h1 className="font-bold text-md md:text-lg">Sport</h1>
                <div className="flex justify-start space-x-2 py-10">
                    <img src={Pic18} className="ftimg " alt=""/>
                    <img src={Pic15} className="ftimg invisible md:visible" alt=""/>
                    <img src={Pic16} className="ftimg invisible md:visible" alt=""/>
                </div>  
            </a>
            <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                <h1 className="font-bold text-md md:text-lg">Tech</h1>
                <div className="flex justify-start space-x-2 py-10">
                    <img src={Laptop} className="ftimg " alt=""/>
                    <img src={Pic3} className="ftimg invisible md:visible" alt=""/>
                    <img src={Pic8} className="ftimg invisible md:visible " alt=""/>
                </div>  
            </a>
            <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                    <h1 className="font-bold text-md md:text-lg">Home</h1>
                    <div className="flex justify-start space-x-2 py-10">
                        <img src={Pic13} className="ftimg " alt=""/>
                        <img src={Pic2} className="ftimg invisible md:visible " alt=""/>
                        <img src={Pic4} className="ftimg invisible md:visible" alt=""/>
                    </div>  
        </a>
        <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                <h1 className="font-bold text-md md:text-lg">Vehicles</h1>
                <div className="flex justify-start space-x-2 py-10">
                    <img src={Pic10} className="ftimg " alt=""/>
                    <img src={Pic11} className="ftimg invisible md:visible " alt=""/>
                    <img src={Pic9} className="ftimg invisible md:visible" alt=""/>
                </div>  
        </a>
        <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                <h1 className="font-bold text-md md:text-lg">Kids</h1>
                <div className="flex justify-start space-x-2 py-10">
                    <img src={Pic6} className="ftimg " alt=""/>
                    <img src={Pic7} className="ftimg invisible md:visible" alt=""/>
                    <img src={Pic14} className="ftimg invisible md:visible" alt=""/>
                </div>  
        </a >
        <a href="/" className="bg-white hover:bg-gray-50 rounded-md p-2">
                <h1 className="font-bold text-md md:text-lg">Maintainance & repairs</h1>
                <div className="flex justify-start space-x-2 py-10">
                    <img src={Pic17} className="ftimg " alt=""/>
                    <img src={Pic5} className="ftimg invisible md:visible" alt=""/>
                    <img src={Pic12} className="ftimg invisible md:visible" alt=""/>
                </div>  
        </a>
            
            </div>

        </div>
    )
}
export default Featuredcat;