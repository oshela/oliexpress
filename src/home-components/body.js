import Tape from "../img/pic1.jpg";
import Camera from "../img/pic2.jpg";
import Laptop from "../img/pic3.jpg";
import DP from "../img/no-pic.png";
import Slider from "./slider";
import Deals from "./deal";
import Top from "./topselection";
import Newarrivals from "./newarrivals";
import Featuredcat from "./featuredcat";
import Footer from "./footer";

const BODY = ()=>{
    return(
        <div className="bg-gray-200">
        <div className="m-6 p-4 block space-y-2 md:grid grid-cols-5 md:gap-2">

            <div class="col-span-1 rounded-md row-span-3 px-3 space-y-2.5 text-sm bg-white">
                <a className=" mt-2 font-bold flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                Categories</a>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    Womens Fashion</a>
                    
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Mens Fashion</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className="  flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Phones & Telecommunications</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Computer, Office & Security</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Consumer Eletronics</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Jewelry & Watches</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home Pets & Appliencies</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href=""className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Bags & Shoes</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href=""className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Toy, Kids & babies </a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href="" className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Outdoor, Fun & Sports</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href=""className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    Beauty, Health & Hair</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href=""className=" flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Automobiles & motocycles</a>
                </dl>
                <dl className="hover:text-gray-400">
                    <a href=""className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Home Improvement & Tools</a>
                </dl>
            </div>
            <div className="col-span-3 cursor-pointer rounded-md row-span-2 bg-white">
       
                    <Slider/>
          
            </div>
            <div className=" col-span-1 rounded-md row-span-3 bg-white">
                    <div>
                        <img src={DP} className="h-14 w-14 m-auto rounded-full" alt=""/>
                        <h1 className="font-bold text-center">Welcome To EliExpress</h1>
                        <div className="flex justify-center gap-2 p-2">
                                <button className=" hover:shadow-md w-3/5 text-white bg-gradient-to-r from-red-500 via-red-500 to-orange-500 rounded-full text-md font-bold cursor-pointer tracking-wider py-2 px-4 "> Join</button>
                                <button className=" hover:shadow-md w-3/5 bg-gray-100 px-4 py-2 rounded-full text-md font-bold cursor-pointer tracking-wider">Sign In</button>
                        </div>
                        <div className="bg-yellow-400 text-white  h-72 rounded-md m-3">
                            <div className=" md:m-2">
                                <p>Welcome Back</p>
                                <h1 className="font-bold">We've Upgraded</h1>
                                <div className="text-white w-2/5">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 rounded-md bg-gradient-to-r row-span-1 from-orange-600 via-yellow-600 to-yellow-500">
                <div className=" flex p-2">
                    <div className="text-white w-2/5">
                        <h2 className="font-bold">Welcome Newcomers!</h2>
                        <h3>Get Items For €0.01 or get a €4 coupon!</h3>
                        <div className="bg-red-500 w-4/5 border-2 border-white cursor-pointer">
                            <h1>NGN 623.58</h1>
                            <p>Claim</p>
                        </div>
                    </div>
                <div className="lg:flex  space-y-2 md:space-x-2">
                    <div className="card">
                        <img className="img" src={Tape} alt="tape"/>
                        <div className=" text-xs absolute bottom-2 left-10">
                            <span className="spn">NGN 4.16</span><br/>
                            <span className=""><strike>NGN 2,496.32</strike></span> 
                        </div>
                    </div>
                    <div className="card">
                        <img  className="img"src={Camera} alt="tape"/>
                        <div className=" text-xs absolute bottom-2 left-10">
                            <span className="spn">NGN 4.16</span><br/>
                            <span><strike> NGN 1866.85</strike></span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="img" src={Laptop} alt="tape"/>
                        <div className=" text-xs absolute bottom-2 left-10">
                            <span className="spn">NGN 4.16</span><br/>
                            <span className="mt-2"><strike>NGN 241,526.32</strike></span>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
            <Deals/>
            <div className=" block md:flex justify-center space-x-4 p-4 m-4">
                <Top/>
                <Newarrivals/>
            </div>
            <div>
                <Featuredcat/>
            </div>
            <footer>
                <Footer/>
            </footer>
    </div>
    );
}
export default BODY;