import Pic1 from "../img/pic15.jpg";
import Pic2 from "../img/pic16.jpg";
import Pic3 from "../img/pic17.jpg";


const Newarrivals = ()=>{
    return(
<a href="/" className="md:bg-white md:hover:bg-gray-50 rounded-md p-2">
        
        <div className="flex justify-between">
            <h2 className="font-bold">New Arrivals</h2>
            <a href="/" className="hover:text-red-500 text-sm">veiw more</a>
            </div>
            <div className=" flex justify-start space-x-2">
            <div className="cards">
                <img src={Pic1} className ="imgz" alt=""/>
                <span className="text-gray-400 text-sm md:text-md">patek original watch</span>
                <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
                
            </div>
            <div className="cards">
                <img src={Pic2} className ="imgz" alt=""/>
                <span className="text-gray-400 text-sm md:text-md">blue pattern sillette heels</span>
                <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
                
            </div>
            <div className="cards">
                <img src={Pic3} className ="imgz" alt=""/>
                <span className="text-gray-400 text-sm md:text-md">red original offwall sneakers</span>
                <h2 className="font-bold text-xs md:text-md">NGN 814.45 </h2>
                
            </div>
            </div>
      

</a>
    );
}
export default Newarrivals;