import React from "react";
import { Nav } from "./nav";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between p-4 ">
            {/* logo */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                }}
                className="text-2xl logo text-white shadow-md "
            >
                Luis Pineda
            </motion.div>
            {/* mobile icon */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
            >
                <Bars3Icon className="h-6 w-6 text-white md:hidden" />
            </motion.div>
        </header>
    );
};

export default Header;
