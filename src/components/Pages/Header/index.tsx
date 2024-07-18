import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Logo
import logoOriginal from '../../../assets/Logo/DevRafa™ Logo.png';

// Icons
import { BiMenu } from 'react-icons/bi';
import { BiCloset } from 'react-icons/bi';

export function Header() {
    // Calculate resize screen width
    const [screen, setScreen] = useState<boolean>(window.innerWidth < 520);
    const [year, setYear] = useState<number>(0);
    const [menu, setMenu] = useState<boolean>(false);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    // Function for calculating screen width
    const handleResize = () => {
        if (window.innerWidth < 520) {
            setScreen(true);
        } else {
            setScreen(false);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (menu) {
            setMenuVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);

    useEffect(()=> {
        const data = new Date();
        setYear(data.getFullYear());
    }, [])

    const handleCloseMenu = () => {
        setMenu(false);
        setTimeout(() => setMenuVisible(false), 500);
    };

    // Add in memory screen width
    const isScreenSmall = useMemo(() => screen, [screen]);

    return (
        <header className={`w-full flex items-center p-2 text-white ${isScreenSmall ? 'justify-between' : 'justify-start'}`}>
            {/* Logo */}
            <div className={`${isScreenSmall ? 'mx-auto' : 'mr-auto'}`}>
                <Link to={'/'}>
                    <img
                        className='w-32'
                        src={logoOriginal}
                        alt="DevRafa™ Logo Original"
                    />
                </Link>
            </div>
            {/* Nav Mobile */}
            {isScreenSmall && (
                <nav className='absolute right-6'>
                    <BiMenu 
                    fill='#fff' 
                    size={28} 
                    onClick={() => setMenu(!menu)} />
                </nav>
            )}
            {/* Nav Desktop/Tablet */}
            {!isScreenSmall && (
                <nav className='ml-auto pe-4'>
                    <ul className='flex items-center gap-6 md:gap-8'>
                        <li className='inter transition-all hover:scale-105'>
                            <Link to={'#about'} className="nav-link">About me</Link>
                        </li>
                        <li className='inter transition-all hover:scale-105'>
                            <Link to={'#projects'} className="nav-link">Projects</Link>
                        </li>
                        <li className='inter transition-all hover:scale-105'>
                            <Link to={'#stacks'} className="nav-link">Stacks</Link>
                        </li>
                        <li className='inter transition-all hover:scale-105'>
                            <Link to={'#depositions'} className="nav-link">Depositions</Link>
                        </li>
                    </ul>
                </nav>
            )}
            {/* Div menu mobile */}
            {menuVisible && (
                <div className={`fixed top-0 right-0 h-screen w-screen bg-black z-10 ${menu ? 'slide-in-right' : 'slide-out-right'}`}>
                    {/* Logo */}
                    <div className='w-full flex justify-center mt-2'>
                        <Link to={'/'}>
                            <img
                                className='w-32'
                                src={logoOriginal}
                                alt="DevRafa™ Logo Original"
                            />
                        </Link>
                    </div>
                    {/* Options Nav Mobile */}
                    <nav className='w-full'>
                        <ul className='w-full flex flex-col items-center mt-6 gap-4'>
                            <li className='inter transition-all hover:scale-105'>
                                <Link to={'#about'} className="nav-link">About me</Link>
                            </li>
                            <li className='inter transition-all hover:scale-105'>
                                <Link to={'#projects'} className="nav-link">Projects</Link>
                            </li>
                            <li className='inter transition-all hover:scale-105'>
                                <Link to={'#stacks'} className="nav-link">Stacks</Link>
                            </li>
                            <li className='inter transition-all hover:scale-105'>
                                <Link to={'#depositions'} className="nav-link">Depositions</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Footer Nav Mobile */}
                    <footer className='w-full text-center absolute bottom-6'>
                        <p className='w-full text-sm'>All Directs Reserved &copy; Copyright DevRafa™ {year}</p>
                    </footer>
                    <button onClick={handleCloseMenu} className='absolute top-7 right-8 text-white'>
                        <BiCloset 
                        fill='#fff'
                        size={28}
                        />
                    </button>
                </div>
            )}
        </header>
    );
}
