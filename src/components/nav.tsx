import { Fragment } from "react";
import { Link } from "react-router-dom";

const navigation: string[] = [
    'About',
    'Projects',
    'Algorithms',
    'Contact',
    'Resume',
];



export const Nav = () => {
    return (
        <nav>
            <ul>
                {navigation.map((item) => (
                    <li key={item}>
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};