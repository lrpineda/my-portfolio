
const Drawer = ({setCurrentPage}) => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-white">
                <li><a onClick={() => setCurrentPage('About')} href="#About">About</a></li>
                <li><a onClick={() => setCurrentPage('Work')} href="#Work">Work</a></li>
                <li><a onClick={() => setCurrentPage('Contact')} href="#Contact">Contact</a></li>
                <li><a>Resume</a></li>
            </ul>
        </div>
    );
}

export default Drawer;