import Logo from '../assets/koudelka-logo-final.svg'

function TopArea(){
    return(
        <>

        <div className="topArea">
            <p className="logo"><img src={Logo} width={48} height={48} />KOUDELKA <strong>DEV</strong></p>

            <nav className="navigation">
               <ul>
                    <li>Services</li>
                    <li>Process</li>
                    <li>Works</li>
                    <li>FAQ</li>
               </ul>
            </nav>
            <button>New project</button>
        </div>

        </>
    )
}
export default TopArea;