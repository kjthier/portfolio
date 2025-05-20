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
                I'm a versatile{' '}
                <span className='font-medium'>full-stack developer</span>{' '}
                with experience in{' '}
                <span className='font-medium'>JavaScript</span>,{' '}
                <span className='font-medium'>React</span>,{' '}
                <span className='font-medium'>Express</span>,{' '}
                <span className='font-medium'>MongoDB</span>, and{' '}
                <span className='font-medium'>Node.js</span>.
                My professional background
                includes{' '}
                <span className='font-medium'>leadership</span>,{' '}
                <span className='font-medium'>project development and management</span>, and{' '}
                <span className='font-medium'>copywriting and editing</span>.
            </p>
            <p>
                I have a passion for sophisticated design and programming, communication,
                process efficiency, learning, creativity, and wellbeing,
                and am a classical and contemporary dancer.
            </p>
        </motion.section>
    )
}
