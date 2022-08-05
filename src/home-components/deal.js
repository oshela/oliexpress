 import Pic1 from "../img/pic2.jpg";
 import Pic2 from "../img/pic3.jpg";
 import Pic3 from "../img/pic9.jpg";
 import Pic4 from "../img/pic5.jpg";
 import Pic5 from "../img/pic6.jpg";
 import Pic6 from "../img/pic12.jpg";






 const Deals = () =>{

    return(
    <div className="p-4 m-4 bg-white">
        <div className="flex justify-between space-x-8 items-center">
        <h1 className="text-4xl font-bold">Super<span className="text-red-500">Deals</span></h1>
        <h2 className=" text-md md:text-xl text-gray-400">Top Products. Incredible Prices</h2>
        </div>
        <div className="flex justify-start md:space-x-2">
            <div className="cards">
                <img src={Pic1} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
            <div className="cards">
                <img src={Pic2} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
            <div className="cards">
                <img src={Pic3} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
            <div className="cards">
                <img src={Pic4} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
            <div className="cards">
                <img src={Pic5} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
            <div className="cards">
                <img src={Pic6} className ="imgs" alt=""/>
                <h2 className="font-bold text-sm md:text-md">NGN 814.45 <span className="span">-30%</span></h2>
                <span className="text-gray-400 text-xs md:text-md">111 orders</span>
            </div>
        
        </div>
    </div>

);
 }
 export default Deals;