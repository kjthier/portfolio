'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About')

    return (
        <motion.section
            className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                I'm a passionate and versatile{' '}
                <span className='font-medium'>full-stack Web Developer</span>{' '}
                with a diverse background in{' '}
                <span className='font-medium'>Communications</span> and{' '}
                <span className='font-medium'>Project Management</span>. An
                adaptive and growth-oriented professional, my background
                includes full-stack Web Development Certification with WBS
                Coding School (Berlin, 2023) and experience in{' '}
                <span className='font-medium'>JavaScript</span>,{' '}
                <span className='font-medium'>React</span>,{' '}
                <span className='font-medium'>Express</span>,{' '}
                <span className='font-medium'>MongoDB</span>, and{' '}
                <span className='font-medium'>Node.js</span>.
            </p>
            <p>
                I have a strong interest in web development, communication and
                process efficiency, learning, creativity, dance, and wellbeing,
                and train and perform as a classical and contemporary dancer.
            </p>
        </motion.section>
    )
}
