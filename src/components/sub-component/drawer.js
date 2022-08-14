
const Drawer = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li><a>About</a></li>
                <li><a>Work</a></li>
                <li><a>Contact</a></li>
                <li><a>Resume</a></li>
            </ul>
        </div>
    );
}

export default Drawer;