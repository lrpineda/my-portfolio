import { FiMenu } from 'react-icons/fi'

const Nav = () => { 
    return (
        <nav className="w-full navbar bg-base-300">
            <div className='flex-1 px-2 mx-2'>Luis Pineda</div>
            <div className='flex-none lg:hidden'>
                <label htmlFor='my-drawer-4' className='btn btn-square btn-ghost'>
                    <FiMenu size={24} />
                </label>
            </div>
            <div className='flex-none hidden lg:block'>
                <ul className='menu menu-horizontal'>
                    <li><a>About</a></li>
                    <li><a>Work</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;