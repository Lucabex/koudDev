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
                        <a href="#faq" className="topButton">
                            FAQ  
                        </a>
                    </li>
               </ul>
            </nav>
            <button>New project</button>
        </header>

        </>
    )
}
export default TopArea;