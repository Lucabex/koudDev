import Logo from '../assets/koudelka-logo-final.svg'
import TopNav from '../elements/TopArea.jsx'
import Ves from '../assets/vesuvio.png'
import { Dot } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
function Home(){
    return(
        <>
        <header>
             <TopNav />
        </header>
        <section className="hero">
            <div className="heroGrid">

                <div className="heroContent">
                    <p>  <span><Dot color='red' />KOUDELKA DEVELOPMENT - LUTON , UK</span></p>
                  
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
       
       
   
        </>
    )
}
export default Home;