import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import memeGen from '@/public/meme-gen.png'
import portfolioImg from '@/public/portfolio-img2.png'
import danceEduImg from '@/public/dance-edu-img.png'
import beArtImg from '@/public/beart-img.png'

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const

export const experiencesData = [
    {
        title: 'Co-Founder, b/eArt',
        location: 'Berlin, Germany',
        description:
            'Business management platform development and coaching for professional visual artists.',
        icon: React.createElement(FaReact),
        date: '2024 - Present',
    },
    {
        title: 'WBS Coding School',
        location: 'Berlin, Germany',
        description: 'Completed a full-stack web and app development bootcamp.',
        icon: React.createElement(FaReact),
        date: '2023',
    },
    {
        title: 'Communications Director, Temple of the Way of Light',
        location: 'Iquitos, Peru / Remote',
        description:
            'Led program development, medical intake, communications, and booking teams for the largest plant medicine retreat center in Latin America.',
        icon: React.createElement(CgWorkAlt),
        date: '2014 - 2022',
    },
    {
        title: 'Project Coordinator, Crown Colony Construction',
        location: 'Wethersfield, USA',
        description:
            'Collaborated with private clients to design and quote home remodeling projects, and handled bookkeeping, payroll, and purchasing.',
        icon: React.createElement(CgWorkAlt),
        date: '2010 - 2014',
    },
    {
        title: 'Project Manager, Corporate Translations',
        location: 'East Hartford, USA',
        description:
            'Coordinated and planned large-scale, multi-language translation projects across diverse sectors, including the pharmaceutical industry.',
        icon: React.createElement(CgWorkAlt),
        date: '2006 - 2010',
    },
] as const

export const projectsData = [
    {
        title: 'b/eArt',
        description:
            'A business-oriented learning and coaching platform for professional visual artists.',
        tags: ['Wix Studio'],
        imageUrl: beArtImg,
        linkToApp: 'https://www.b-e.art/',
        githubLink: '',
    },
    {
        title: 'Dance-edu',
        description:
            'An evolving educational platform for dance teachers and students to manage their schedules and training.',
        tags: ['React', 'CSS', 'Radix', 'MongoDB', 'Express'],
        imageUrl: danceEduImg,
        linkToApp: 'https://dance-edu.netlify.app/auth',
        githubLink: 'https://github.com/kjthier/dance-edu',
    },
    {
        title: 'Personal Portfolio',
        description:
            'Responsive web resume with fresh, modern UI design. Uses Tailwind, Next.js, and Framer Motion for advanced animations.',
        tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
        imageUrl: portfolioImg,
        linkToApp: 'https://github.com/kjthier/portfolio',
        githubLink: 'https://github.com/kjthier/portfolio',
    },
    {
        title: 'MemeGen',
        description:
            'A meme generator app that allows users to create and share memes. Uses React, Material UI, and JavaScript.',
        tags: ['React', 'Material UI', 'JavaScript'],
        imageUrl: memeGen,
        linkToApp: 'https://memegener8tr.netlify.app/',
        githubLink: 'https://github.com/kjthier/memegenerator',
    },
] as const

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',
    'Bootstrap',
    'Radix',
    'MongoDB',
    'SQL',
    'NoSQL',
    'Express',
    'PostgreSQL',
    'Framer Motion',
    'WordPress',
    'Wix Studio',
] as const
