    import Picture from "../img/pic7.jpg";
    
    const NAV = ()=>{
    return(
        <div className="bg-white">
            <header className="">
                <img src={Picture} className="top-0 h-20  w-full object-cover relative" alt=""/>
                <h1 className="absolute top-3 left-6 text-xl md:text-4xl text-gray-600">New In Fashion</h1>
            </header>
            <div>
            <nav className=" md:p-2 md:m-2 inline md:flex justify-end bg-primary h-8 w-full items-start text-xs md:text-sm md:space-x-2.5">
                    <select className="bg-primary border-r-2 border-gray-200 hover:text-red-500">
                    <option value=""> Sell On Eliexpress</option>
                    <option value=""> chinese registration</option>
                    <option value="">NON-cinese registration</option>
                    </select>
                    <select  className="bg-primary border-gray-200 border-r-2 hover:text-red-500"name="" id="" >
                    <option value="">Help</option>
                    <option value="">Customer Service</option>
                    <option value="">Reports And Disputes</option>
                    </select>
                    <a href="" className="hover:text-red-500"> Buyer Protection</a>
                    <a href="" className="border-gray-200 border-r-2 hover:text-red-500">APP</a>
                    <select className="bg-primary border-gray-200 border-r-2 hover:text-red-500" name="" id="" >
                    <option value="">language</option>
                    <option value="">Customer Service</option>
                    <option value="">Reports And Disputes</option>
                    </select>
                    <a href="" className="hover:text-red-500">WishList</a>
                    <select  className="bg-primary hover:text-red-500" name="" id="" >
                    <option value="">Account</option>
                    <option value="">Customer Service</option>
                    <option value="">Reports And Disputes</option>
                    </select>
            </nav>
            <div className="md:grid md:grid-cols-5 md:ml-20 flex justify-start text-xs">
                <div className=" col-span-1  grid grid-rows-2 cursor-pointer">
                    <span className="text-red-500 text-2xl md:text-4xl">
                        EliExpress
                    </span>
                    <span className="text-xs md:text-sm"> Smarter Shopping,Better Living!</span>
                </div>
                <div className="md:col-span-3 w-full ml-4 grid grid-rows-2">
                    <div class="">
                        <div class="relative "> 
                                <input type="text" class="border-2 border-red-500 h-8 md:h-11 rounded-md md:w-11/12 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
                                    <div className="absolute top-0 md:right-16 bg-red-500 rounded-r-md"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500">
                                        <svg class="w-5 md:w-8 h-8 md:h-11 text-white"fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></i> 
                                    </div>
                            </div>
                    </div>
                   <div className="md:p-2 md:space-x-2 text-xs md:text-sm"> 
                       <a className="hover:text-red-500" href="">Smart Watch Men,</a>
                       <a className="hover:text-red-500" href="">Free Shipping Items To Nigeria,</a>
                       <a className="hover:text-red-500" href="">Human Hair Wigs,</a>
                        <a className="hover:text-red-500" href="">Bags,</a>
                        <a className="hover:text-red-500" href="">Iphone 11,</a>
                        <a className="hover:text-red-500" href="">Iphone 8Plus</a>
                   </div>
                </div>
                <div className="col-span-1 cursor-pointer">
                <svg className="md:w-12 h-12 w-6 left-0  stroke-current hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
            </div>
        </div>
        </div>
    );
}
export default NAV;