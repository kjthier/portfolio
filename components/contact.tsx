'use client'

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView('Contact')
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <motion.section
            id='contact'
            className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            ref={ref}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6'>
                Please contact me directly at{' '}
                <a
                    className='underline'
                    href='mailto:karinjthier@gmail.com'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    karinjthier@gmail.com
                </a>{' '}
                or through this form.
            </p>
            <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={async (formData) => {
          formRef.current?.reset()
          const {data, error} = await sendEmail(formData);

          if(error){
            toast.error(error)
            return
          }
          toast.success("Email sent successfully!")
        }}
        ref={formRef}
      >
                <input
                    type='email'
                    name='senderEmail'
                    required
                    maxLength={500}
                    className='h-14 rounded-lg borderBlack px-4'
                    placeholder='Your email'
                />
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4'
                    name='message'
                    placeholder='Your message'
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
