"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function NavLinks() {
    return (
        <>
            <Link href={'/models3d'}><p>Models</p></Link>
            <Link href={'/animation3d'}><p >Animation</p></Link>
            <SocialIcon url="https://github.com/tsubakijuju13/Integrator_Project" bgColor="transparent"/>
        </>
    )
}

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const actionMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="flex w-1/3 justify-end">
                <motion.div 
                    initial={{x: -500, opacity: 0, scale: 0.5}}
                    animate={{x:0, opacity: 1, scale: 1 }}
                    transition={{duration: 1.5}}
                    className="hidden w-full md:flex space-x-14 justify-center items-center">
                    <NavLinks />
                </motion.div>
                <div className="md:hidden">
                    <button onClick={actionMenu}>
                        {isOpen? <X />: <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center basis-full">
                    <NavLinks />
                </div>
            )}
        </>
    )
}
