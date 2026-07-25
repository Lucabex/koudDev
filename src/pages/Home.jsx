import Logo from '../assets/koudelka-logo-final.svg'
import TopNav from '../elements/TopArea.jsx'
import Ves from '../assets/vesuvio.png'
import { Dot } from 'lucide-react'
import { ArrowRight,Layout, Wrench, RefreshCw, TrendingUp, ShoppingCart, Smartphone,MapPin } from 'lucide-react'
function Home(){
    return(
        <>
        <header>
             <TopNav />
        </header>
        <section className="hero">
            <div className="heroGrid">

                <div className="heroContent">
                    <p>  <span><MapPin color='red' size={18} />KOUDELKA DEVELOPMENT - LUTON , UK</span></p>
                  
                    <h1>Website Design, Mobile App, Software and SEO optimisation</h1>
                    <h3>Web, mobile, and custom software for small and local businesses — plus the SEO to make sure the site built actually gets found.</h3>
                   <div className="btnDisplay">
                        <a href="#services" className="btn dark">
                            Services  
                        </a>
                        <a href="#process" className="btn mid">
                            Process  
                        </a>
                        <a href="#work" className="btn light">
                            Work  
                        </a>
                    </div>
                </div>

                <div className="bigLogo">
                    <img src={Logo} alt="" width={408} height={408}/>
                </div>



            </div>
            

        </section>
        <section className='optionBox'>
    <div className="optionGrid">
        <div className="option">
            <Layout size={32} />
            <h4>Website Design</h4>
        </div>
        <div className="option">
            <Wrench size={32} />
            <h4>Web Maintenance</h4>
        </div>
        <div className="option">
            <RefreshCw size={32} />
            <h4>Website Redesign</h4>
        </div>
        <div className="option">
            <TrendingUp size={32} />
            <h4>SEO Optimisation</h4>
        </div>
        <div className="option">
            <ShoppingCart size={32} />
            <h4>Ecommerce Websites</h4>
        </div>
        <div className="option">
            <Smartphone size={32} />
            <h4>Mobile App</h4>
        </div>
    </div>
</section>
<section className="servicesBox">
    <div className="servicesHeader">
         <span className="eyebrow">WHAT WE DO</span>
         <h2>Four ways to grow your business.</h2>
         <p>A site that works, an app if it's needed, and the SEO to make sure people actually find it.</p>
    </div>

    <div className="servicesGrid">
        <div className="serviceCard">
            <span className="tag">Web</span>
            <h3>Web Development</h3>
            <p>Custom-built. A website built around the business, not squeezed into someone else's template.</p>
        </div>
        <div className="serviceCard">
            <span className="tag">Mobile</span>
            <h3>Mobile Apps</h3>
            <p>For iPhone and Android — simple, fast, and easy for customers to use.</p>
        </div>
        <div className="serviceCard">
            <span className="tag">SEO</span>
            <h3>Search Optimisation</h3>
            <p>Making sure Google can find the site, and that people searching actually land on it.</p>
        </div>
        <div className="serviceCard">
            <span className="tag">Software</span>
            <h3>Custom Software</h3>
            <p>Tools built for one specific job — a booking system, a dashboard, whatever the day-to-day actually needs.</p>
        </div>
    </div>
</section>

<section className="getInTouchBox">
    
</section>
<section className="processBox">
    <div className="processHeader">
         <span className="eyebrow">HOW IT WORKS</span>
         <h2>What happens after that first call.</h2>
         <p>Four stages take it from an idea to something live — the same process whether it's a single page or a full platform.</p>
    </div>

</section>
       
       
   
        </>
    )
}
export default Home;