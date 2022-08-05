import Pic1 from "../img/pic19.jpg";
import Pic2 from "../img/pic20.jpg";
import Pic3 from "../img/pic21.jpg";

const Top = ()=>{

    return(
<a href="/" className="md:bg-white md:hover:bg-gray-50 rounded-md p-2">
        
    <div className="flex justify-between">
        <h2 className="font-bold">Top Selection</h2>
        <a href="/" className="hover:text-red-500 text-sm">veiw more</a>
    </div>
    <div className=" flex justify-start space-x-2">
        <div className="cards">
            <img src={Pic1} className ="imgz" alt=""/>
            <span className="text-gray-400 text-sm md:text-md">New original Dove men</span>
            <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
        
        </div>
        <div className="cards">
            <img src={Pic2} className ="imgz" alt=""/>
            <span className="text-gray-400 text-sm md:text-md">New Tommy Hilfiger Polo</span>
            <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
        
        </div>
        <div className="cards">
            <img src={Pic3} className ="imgz" alt=""/>
            <span className="text-gray-400 text-sm md:text-md">Original Blue Nike AirMax</span>
            <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
        
        </div>
    </div>

</a>
    );
}
export default Top;