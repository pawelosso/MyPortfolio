import '../Navbar.scss';

const Navbar = ({showQualities, showContactForm}) => {
    return(
        <nav>
            <ul>
                <li onClick={showQualities}>My qualities</li>
                <li onClick={showContactForm}>Contact me</li>
            </ul>
        </nav>
    )
}

export default Navbar