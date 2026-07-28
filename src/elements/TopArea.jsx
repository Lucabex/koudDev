import Logo from '../assets/koudelka-logo-final.svg'

function TopArea(){
    return(
        <>

        <header className="topArea">
            <p className="logo"><img src={Logo} width={48} height={48}  alt="Koudelka Development logo"/>KOUDELKA <strong>DEV</strong></p>

            <nav className="navigation">
               <ul>
                    <li>  
                        <a href="#services" className="topButton">
                            Services  
                        </a></li>
                    <li>
                        <a href="#process" className="topButton">
                            Process  
                        </a>
                    </li>
                    <li>  
                        <a href="#work" className="topButton">
                            Work  
                        </a>
                    </li>
                    <li>  
                        <a href="#pricing" className="topButton">
                            Pricing  
                        </a>
                    </li>
                    <li>  
                        <a href="#faq" className="topButton">
                            FAQ  
                        </a>
                    </li>
               </ul>
            </nav>
            <button className='topBtn'> <a href="mailto:lucabex@gmail.com?subject=New%20Project%20Enquiry&body=KOUDELKADEV%0A%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%0ANew%20Project%20Enquiry%0A%0APlease%20complete%20every%20field%20below%20and%20send%20this%20email%20back%20to%20us.%20The%20more%20detail%20you%20give%2C%20the%20more%20accurate%20your%20quote%20will%20be.%0A%0ACONTACT%0AName%3A%20%0ALast%20name%3A%20%0ABusiness%20name%3A%20%0AEmail%3A%20%0APhone%3A%20%0A%0APROJECT%0AProject%20type%3A%20%0ABudget%3A%20%0ATimeline%3A%20%0A%0ADETAILS%0AProject%20details%3A%20%0A%0A%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%0AThank%20you%2C%0Akoudelkadev">
  New Project
</a></button>
        </header>

        </>
    )
}
export default TopArea;