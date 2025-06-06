'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section
            className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
            id='home'
            ref={ref}
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src='/profile-img.jpg'
                            alt='Karin portrait'
                            width='392'
                            height='392'
                            quality='95'
                            priority={true}
                            className='h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                        <motion.span
                            className='absolute bottom-0 right-0 text-3xl'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 125,
                                duration: 0.7,
                                delay: 0.1,
                            }}
                        >
                            👋🏼
                        </motion.span>
                    </motion.div>
                </div>
            </div>
            <motion.h1
                className='mb-10 mt-6 px-4 !leading-[1.5]'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className='font-bold text-4xl'>Hey there, I'm Karin Gingras</p>
                <p className='text-2xl mt-6'>Full-stack software developer </p>
            </motion.h1>
            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href='#contact'
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection('Contact')
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>
                <a
                    className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack'
                    href='/Karin_Gingras_CV.pdf'
                    download
                >
                    {' '}
                    {/* https://novoresume.com/*/}
                    Download CV{' '}
                    <HiDownload className='opacity-60 group-hover:translate-y-.2 transition' />
                </a>
                <a
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.19rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack'
                    href='https://www.linkedin.com/in/karingingras'
                    target='_blank'
                >
                    <BsLinkedin />
                </a>
                <a
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack'
                    href='https://github.com/kjthier'
                    target='_blank'
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
