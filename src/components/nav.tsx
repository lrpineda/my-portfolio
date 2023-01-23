

const navigation: string[] = [
    'About',
    'Projects',
    'Algorithms',
    'Contact',
    'Resume',
];



export const Nav = ({dark}:any) => {
    
    return (
        <nav className={`lg:flex items-center  hidden lg:visible `}>
            <ul className="flex flex-row items-center space-x-4">
                {navigation.map((item) => (
                    <li  key={item}>
                        <a href={`#${item.toLowerCase()}`} className={`${dark ? 'text-white': 'text-black'}  text-xl font-thin`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};