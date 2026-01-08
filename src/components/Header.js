import  {HEADER_LOGO_URL} from "../utils.s/constants";
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    <img src={HEADER_LOGO_URL} alt="logo" width="75px" />
                </div>
            </div>

            <div className='header-title'>
                <ul className='header-ul'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;