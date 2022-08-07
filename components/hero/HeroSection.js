/* eslint-disable @next/next/no-img-element */

// External Imports
import React from 'react';
import Button from '../utils/Button';
import HeaderInner from '../header/HeaderInner';

const HeroSection = () => {
    return (
        <>
            <header
                className="absolute left-0 top-0 z-50 w-full lg:pt-[8px]"
            >
                <HeaderInner />
            </header>

            <section className="hero-section relative z-40 bg-white pt-[120px] pb-[110px] lg:pt-[220px]">
                <span className="hero-shapes">
                    <span className="hero-shape shape-1">
                        <img src="/images/elements/element-1.png" alt="element-1" loading="lazy" />
                    </span>
                    <span className="hero-shape shape-2">
                    </span>
                    <span className="hero-shape shape-3">
                    </span>
                    <span className="hero-shape shape-4">
                    </span>
                    <span className="hero-shape shape-5">
                    </span>
                    <span className="hero-shape shape-6">
                        <img src="/images/elements/element-6.png" alt="element-6" loading="lazy" />
                    </span>
                    <span className="hero-shape shape-7">
                        <img src="/images/elements/element-7.png" alt="element-7" loading="lazy" />
                    </span>
                    <span className="hero-shape shape-8">
                        <img src="/images/elements/element-8.png" alt="element-8" loading="lazy" />
                    </span>
                    <span className="hero-shape shape-9">
                        <img src="/images/elements/element-9.png" alt="element-9" loading="lazy" />
                    </span>
                </span>
                <div className="container">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4 lg:w-8/12">
                            <div className="hero-content relative z-[99] md:pr-[85px] pr-[20px]">
                                <h1 className='text-right'
                                >
                                    <span className="block 2xl:mb-[-18px] 2xl:leading-[1]">React</span>
                                    Conference
                                </h1>
                                <p className='md:text-[20px] text-[16px] leading-[1.1875em] max-w-[515px] ml-auto md:mt-[40px] mt-[30px]'>
                                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
                                </p>
                                <div className='max-w-[515px] ml-auto mt-[26px] text-center md:text-left'>
                                    <Button href="/" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex justify-between hero-img-parent">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-img-wrap img-1 max-w-[330px]">
                                <div className='xl:mt-[-190px]'>
                                    <img className="rounded-[30px]" src="/images/hero/hero-img-1.png" alt="hero-img-1" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-img-wrap img-2 max-w-[550px] lg:ml-auto">
                                <div className='lg:mt-[-350px]'>
                                    <img className="rounded-[50px]" src="/images/hero/hero-img-2.png" alt="hero-img-2" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection