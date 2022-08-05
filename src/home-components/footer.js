const Footer =()=>{
    const list = document.querySelector('#list');
    window.addEventListener('resize', () => {
        if( window.innerWidth < 1200){
            list.classList.add('hidden');
        }else{
            list.classList.remove('hidden');
        }
    })
    return(
        <div className="">
        <ul className="flex justify-center invisible md:visible space-x-2 text-sm p-2">
            <li>Discover More</li>
            <li>Double 11 Festival</li>
            <li>11.11 Promotion</li>
            <li>AliExpress 11.11</li>
            <li>Black Friday</li>
            <li>Singles Day</li>
            <li>Double 11 shopping festival</li>
            <li>Double 11 shopping deal</li>
            <li>11.11</li>
            <li>Double 11</li>
            <li>11.11 sale</li>
        </ul>
            <section className="lg:p-6 bg-white">
                <div className="  flex justify-center space-x-6 md:space-y-2"id="list">
                    <div className="textcard invisible md:visible">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1>Great value</h1>
                    <span className="small">We offer competitive prices on over 100 million items.</span>
                    </div>
                    <div className="textcard">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                        <h1>Worldwide shopping</h1>
                        <span className="small">We ship to over 200 countries and regions, and our site comes in 12 languages.</span>
                    </div>
                    <div className="textcard">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <h1>Safe payment</h1>
                    <span className="small">Pay with the world’s most popular and secure payment methods.</span>
                    </div>
                    <div className="textcard">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h1 >Shop with confidence</h1>
                    <span className="small">Our Buyer Protection policy covers your entire purchase journey.</span>
                    </div>
                    <div className="textcard">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h1>Help center</h1>
                    <span className="small">Round-the-clock assistance for a smooth shopping experience.</span>
                    </div>
                    <div className="text-center invisible md:visible">
                   
                   <div className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    </div> 
                    <h1>Shop better</h1>
                    <span className="small">Download the app for mobile-only features such as image search and discount games.</span>
                    </div>
                 </div>
                 <hr className="mt-8"/>
                 <section className="p-6 flex justify-start space-x-6 md:space-x-8 ">
                <div className="w-2/5">
                <h1>Stay Connected</h1>
               <div className="flex justify-start space-x-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50"  className="svgs"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" className="svgs"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" className="svgs"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className="svgs"><path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v2.724c0,0.745,0.784,1.23,1.45,0.897l2.629-1.314 C10.039,20.858,11.02,21,12,21c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M12.468,13.858l-2.218-1.774L5,14.417l5.2-5.2 c0.36-0.36,0.934-0.392,1.332-0.074l2.218,1.774L19,8.583l-5.2,5.2C13.439,14.144,12.866,14.176,12.468,13.858z"/></svg> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" className="svgs"><path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/></svg></div>
               
               </div>
                <ul className="block">
                    <h1>Shopping With Us</h1>
                    <div className="small">
                    <li>making payments</li>
                    <li>delivery options</li>
                    <li>buyer protection</li>
                    </div>

                </ul>
                <ul className="block">
                    <h1>Customer Service</h1>
                   <div className="small">
                   <li>Customer Service</li>
                    <li>Transaction Service Agreement</li>
                    <li>Take Our Feedback Survey</li>
                   </div>

                </ul>
                <ul className="block">
                    <h1>Collaberate With Us</h1>
                   <div className="small">
                   <li>Patnerships</li>
                    <li>Affiliate Programs</li>
                   </div>
                   
                </ul>
            </section>

            </section>
            <section className="bg-gray-200 md:grid grid-cols-2 gap-2 justify-start w-full md:p-6">
                <div className="col-span-1">
                    <h2>Help</h2>
                   <a href="/" className="footerlink">Customer Service,</a>
                   <a href="/" className="footerlink"> Disputes & Reports, </a>
                   <a href="/" className="footerlink">Buyer Protection,</a>
                   <a href="/" className="footerlink"> Report IPR infringement</a>
                   
                </div>
                <div className="col-span-1">
                <h2>Multi-Language Sites</h2>
                 
                    <a href="/" className="footerlink">Russian,</a>
                   <a href="/" className="footerlink">Portuguese,</a>
                   <a href="/" className="footerlink">Spanish,</a>
                   <a href="/" className="footerlink">French,</a>
                   <a href="/" className="footerlink">German,</a>
                   <a href="/" className="footerlink">Italian,</a>
                   <a href="/" className="footerlink">Dutch,</a>
                    <a href="/" className="footerlink">Turkish,</a>
                   <a href="/" className="footerlink">Japanese,</a>
                   <a href="/" className="footerlink">Korean,</a>
                   <a href="/" className="footerlink">Thai,</a>
                   <br/>
                   <a href="/" className="footerlink">Vietnamese,</a>
                   <a href="/" className="footerlink">Arabic,</a>
                   <a href="/" className="footerlink">Hebrew,</a>
                   <a href="/" className="footerlink">Polish</a>
                
                </div>
                <div className="col-span-1">
             
                <h2>Browse by Category</h2>
               
                    <a href="/" className="footerlink">All popular,</a>
                    <a href="/" className="footerlink">Product,</a>
                    <a href="" className="footerlink">Promotion,</a>
                    <a href="" className="footerlink">Low Price,</a>
                    <a href="" className="footerlink">Great Value,</a>
                    <a href="" className="footerlink">Reviews,</a>
                    <a href="" className="footerlink">Blog,</a>
                    <a href="" className="footerlink">Seller Portal,</a>
                    <a href="" className="footerlink">BLACK FRIDAY,</a>
                    <a href="" className="footerlink">EliExpress Assistant</a>

            </div>
            <div className="col-span-1">

                <h2>Elimama Group</h2>
             
                <a href="" className="footerlink">Alibaba Group Website,</a>
                <a href="" className="footerlink">EliExpress,</a>
                <a href="" className="footerlink">Elimama,</a>
                <a href="" className="footerlink">Elipay,</a>
                <a href="" className="footerlink">Eliggy,</a>
                <a href="" className="footerlink">Elibaba Cloud,</a>
                <a href="" className="footerlink">Elibaba International,</a>
                <a href="" className="footerlink">EliTelecom,</a>
                <a href="" className="footerlink">EingTalk,</a>
                <a href="" className="footerlink">Juhuasuan,</a>
                <a href="" className="footerlink">Taobao Marketplace,</a>
                <a href="" className="footerlink">Tmall,</a>
                <a href="" className="footerlink">Taobao Global,</a>
                <a href="" className="footerlink">EliOS,</a>
                <a href="" className="footerlink">1688</a>
               
            </div>
            </section>
         
      
        </div>
    )
}
export default Footer;