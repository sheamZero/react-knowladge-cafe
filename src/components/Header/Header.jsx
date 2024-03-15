import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className="py-12 md:flex justify-between items-center max-w-7xl mx-auto border-b-2 mb-5">
            <h1 className="text-4xl font-extrabold">Knowladge Cafe</h1>
            <img src={profile} alt="" />            
        </header>
    );
};

export default Header;