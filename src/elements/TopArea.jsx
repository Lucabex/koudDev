import Logo from '../assets/koudelka-logo-final.svg'

function TopArea(){
    return(
        <>

        <div className="topArea">
            <p className="test"><img src={Logo} width={38} height={38} />KOUDELKA <strong>DEV</strong></p>
        </div>
        
        </>
    )
}
export default TopArea;