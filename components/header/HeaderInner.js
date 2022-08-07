/* eslint-disable @next/next/no-img-element */

// External Imports
import React, { useState } from 'react';
import Link from 'next/link'

const HeaderInner = () => {

    const [navToggle, setNavToggle] = useState(false);

    const toggleHandler = () => {
        setNavToggle(!navToggle)
    }

    return (
        <>
            <div className="header-inner relative z-50">
                <div className="container">
                    <div className="menu-wrapper relative -mx-4 flex items-center justify-between">
                        <div className="w-[150px] max-w-full px-4">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/logo/logo.png"
                                        alt="react"
                                        loading="lazy"
                                        className="w-full"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="lg:w-full max-w-full  px-4">
                            <div className={navToggle ? "nav-wrap menu-open " : "nav-wrap menu-close"}>
                                <nav className='primary-nav'>
                                    <ul className="grid gap-[2px] lg:flex lg:items-center lg:justify-center lg:gap-[50px]">
                                        <li>
                                            <Link href="/">
                                                <a className='text-[18px] lg:p-[32px_0] p-[8px_2px] leading-[1.22em] inline-flex items-center font-medium text-title transition-all duration-300 ease-in-out hover:text-primary'>
                                                    About us
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a className='text-[18px] lg:p-[32px_0] p-[8px_2px] leading-[1.22em] inline-flex items-center font-medium text-title transition-all duration-300 ease-in-out hover:text-primary'>
                                                    What We do
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a className='text-[18px] lg:p-[32px_0] p-[8px_2px] leading-[1.22em] inline-flex items-center font-medium text-title transition-all duration-300 ease-in-out hover:text-primary'>
                                                    Our work
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a className='text-[18px] lg:p-[32px_0] p-[8px_2px] leading-[1.22em] inline-flex items-center font-medium text-title transition-all duration-300 ease-in-out hover:text-primary'>
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a className='text-[18px] lg:p-[32px_0] p-[8px_2px] leading-[1.22em] inline-flex items-center font-medium text-title transition-all duration-300 ease-in-out hover:text-primary'>
                                                    Say hi
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="w-[150px] max-w-full px-4">
                            <div className="ml-auto text-right">
                                <span onClick={toggleHandler} className="hamburger inline-flex items-center justify-center p-[5px] text-title hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">
                                    <span className="icon">
                                        <svg width="1.375em" height=".875em" viewBox="0 0 22 14" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.55255 13H20.6578M1.55255 1H20.6578H1.55255ZM1.55255 7H20.6578H1.55255Z" stroke="inherit" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderInner