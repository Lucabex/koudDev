import Logo from '../assets/koudelka-logo-final.svg'
import TopNav from '../elements/TopArea.jsx'
import Ves from '../assets/vesuvio.png'
import Napoli from '../assets/naples.png'
import { Dot } from 'lucide-react'
import { ArrowRight,Layout, Wrench, RefreshCw, TrendingUp, ShoppingCart, Smartphone,MapPin,Phone,Mail,Check } from 'lucide-react'
import { useState } from 'react'
import { Plus } from 'lucide-react'

 const pricingTiers = [
  {
    name: "Landing",
    tagline: "Single page WebSite.",
    price: "250",
    featured: false,
    features: [
      "Single-page site",
      "Mobile-responsive build",
      "Contact form",
      "Basic SEO setup",
      "30 days of free fixes"
    ]
  },
  {
    name: "Business",
    tagline: "A full site for a growing business.",
    price: "450",
    featured: true,
    features: [
      "Up to 5 pages",
      "Gallery & content sections",
      "Enquiry forms",
      "30 days of free fixes"
    ]
  },
  {
    name: "Commerce",
    tagline: "Sell online, built to scale.",
    price: "1,000",
    featured: false,
    features: [
      "Online store & product pages",
      "Cart & Stripe checkout",
      "Order confirmation emails",
      "Everything in Business",
      "30 days of free fixes"
    ]
  }
]

const carePlans = [
  { name: "Care Plan", price: "15", unit: "/mo", desc: "Hosting, backups, security, and small edits handled." },
  { name: "SEO", price: "150", unit: "/mo", desc: "Local optimisation, content, and monthly reporting." }
]

const faqData = [
  {
    q: "How long does a typical project take?",
    a: "A single-page site usually takes 1–2 weeks from first call to launch. A full platform with bookings, admin dashboards, or custom software can run 4–8 weeks depending on scope — you'll get a clear timeline after the discovery stage, not a vague estimate."
  },
  {
    q: "Do I need to know what I want before reaching out?",
    a: "No. Most people start with a rough idea, not a finished brief. The discovery call is where that gets shaped into something concrete."
  },
  {
    q: "What happens after the site goes live?",
    a: "Support doesn't stop at launch. Small fixes, content updates, and adjustments as the business changes are part of the process, not a separate paid extra for the first period after handoff."
  },
  {
    q: "Can you redesign an existing website instead of building from scratch?",
    a: "Yes — redesigns are common. Sometimes it's a full rebuild, sometimes it's keeping the structure and improving performance, design, or SEO on top of what's already there."
  },
  {
    q: "Do you build mobile apps as well as websites?",
    a: "Yes, cross-platform apps for iPhone and Android, alongside web and software work — often the two are connected, like a booking site with a companion app."
  }
]


   
function Home(){
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }
    return(
        <>
  
             <TopNav />
        <main>
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
                    <img src={Logo} alt="Big Logo" width={408} height={408}/>
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
<section className="servicesBox" id='services'>
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
     <span className="getEye">GET IN TOUCH</span>
     <h2>Have a project worth building properly?</h2>
     <span>Tell me what the business needs — a site, an app, an internal tool, or all three — and I'll get back to you with next steps.</span>
     <button className='emailBtn'>Email the Studio</button>
</section>

<section className="pricingBox" id="pricing">
    <div className="pricingHeader">
        <span className="eyebrow">PRICING</span>
        <h2>Clear prices, no surprises.</h2>
        <p>Every build is mobile-responsive and includes 30 days of free fixes after launch. Prices start here and firm up once the scope is clear.</p>
    </div>

    <div className="pricingGrid">
        {pricingTiers.map((tier, i) => (
            <div className={`priceCard ${tier.featured ? 'featured' : ''}`} key={i}>
                {tier.featured && <span className="popular">Most popular</span>}
                <span className="priceName">{tier.name}</span>
                <p className="priceTagline">{tier.tagline}</p>
                <div className="priceAmount">
                    <span className="from">from</span>
                    <span className="amount">£{tier.price}</span>
                </div>
                <ul className="priceFeatures">
                    {tier.features.map((f, j) => (
                        <li key={j}><Check size={16} /> {f}</li>
                    ))}
                </ul>
                <a href="#contact" className="priceBtn">Start a project <ArrowRight size={16} /></a>
            </div>
        ))}
    </div>

    <div className="recurringStrip">
        {carePlans.map((plan, i) => (
            <div className="recurringCard" key={i}>
                <div className="recurringInfo">
                    <span className="recurringName">{plan.name}</span>
                    <p>{plan.desc}</p>
                </div>
                <div className="recurringPrice">
                    <span className="from">from</span>
                    <span className="amount">£{plan.price}<em>{plan.unit}</em></span>
                </div>
            </div>
        ))}
    </div>
</section>

<section className='process' id='process'>
 <div className="processBox">
    <div className="processHeader">
         <span className="eyebrow">HOW IT WORKS</span>
         <h2>What happens after that first call.</h2>
         <p>Four stages take it from an idea to something live — the same process whether it's a single page or a full platform.</p>
    </div>
    <div className="processGrid" >
        <div className="processGridBox">
            <span >
                01
            </span>
            <h3>
                DISCOVERY
            </h3>
            <p>
                Understand the business, the users, and what the project actually needs to do.
            </p>
        </div>
        <div className="processGridBox">
            <span >
                02
            </span>
            <h3>
                BUILD
            </h3>
            <p>
                Design and development in step, with working versions to react to early.
            </p>
        </div>
        <div className="processGridBox">
            <span >
                  03
            </span>
            <h3>
                SHIP
            </h3>
            <p>
                Tested across devices, launched, with analytics wired in from day one.
            </p>
        </div>
        <div className="processGridBox">
            <span >
                04
            </span>
            <h3>
                SUPPORT
            </h3>
            <p>
                Fixes, updates, and small improvements as the business changes.
            </p>
        </div>

    </div>
</div>
</section>
  <section className="faqBox" id="faq">
            <div className="faqHeader">
                <span className="eyebrow">FAQ</span>
                <h2>Questions worth answering upfront.</h2>
                <p>If something's not covered here, that's what the first call is for.</p>
            </div>

            <div className="faqList">
                {faqData.map((item, i) => (
                    <div className={`faqItem ${openIndex === i ? 'open' : ''}`} key={i}>
                        <button className="faqQuestion" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                            <span>{item.q}</span>
                            <Plus size={20} className="faqIcon" />
                        </button>
                        <div className="faqAnswer">
                            <p>{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section className="works" id='work'>
            <div className="worksBox">
                <div className="worksHeader">
                    <span>MOST RECENT WORKS</span>
                    <h2>Built, not templated!</h2>

                </div>
                <div className="worksGrid">
                    <div className="workCard">
                        <div className="cardTop">
                           <span>POWER<strong>ROD</strong></span>

                        </div>
                        <div className="cardBottom">
                            <span>Live 1st of september 26</span>
                            <h3>Power Rod — Drainage & Plumbing</h3>
                            <p>A services site for a plumbing and drainage company covering Hertfordshire, Bedfordshire, and Buckinghamshire.</p>
                        </div>
                    </div>
                    <div className="workCard">
                        <div className="cardTop">
                            <span>Luton Dog Boarding</span>
                        </div>
                        <div className="cardBottom">
                            <span id="live">Live</span>
                            <h3>Luton Dog Boarding</h3>
                            <p>A full-stack booking platform for a licensed home boarding business, admin dashboard, reviews, and automated booking emails.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer">
            <div className="footerBox">
                <p className="logo"><img src={Logo} width={48} height={48} alt="Koudelka Development logo" />KOUDELKA <strong>DEV</strong></p>
                <span>© 2026 Koudelka Development. Based in Luton, UK.</span>
                <div className="contactBox">
                    <span><Phone size={14}/><a href="tel:07585626737">07585626737</a> </span>
                    <span><MapPin size={14}/> <a className="mapLink"
                                    href="https://www.google.com/maps/search/?api=1&query=Luton"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Luton , Bedfordshire ,England ,Uk
                                </a> </span>
                    <span><Mail size={14}/> Lucabex@gmail.com</span>
                </div>
            </div>
        </section>
       
       
   </main>
        </>
    )
}
export default Home;