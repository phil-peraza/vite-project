import headerLogo from '../assets/logo.png';

function Header() {
    return (
        <div>
            <img src={headerLogo} alt="TripleTen logo" />
            <h1>Hello Vite!</h1>
        </div>
    );
}

export default Header;