import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div id='about' className='flex items-center gap-28'>
            <div className='grid grid-cols-2 gap-5 w-[480px] mt-36'>
                <Image
                    src="/photo1.png"
                    width={232}
                    height={255}
                    alt="Picture of the author"

                />

                <Image
                    src="/photo2.png"
                    width={232}
                    height={255}
                    alt="Picture of the author"
                    className='mt-3'

                />

                <Image
                    src="/photo3.png"
                    width={232}
                    height={255}
                    alt="Picture of the author"


                />

                <Image
                    src="/photo4.png"
                    width={232}
                    height={255}
                    alt="Picture of the author"
                    className='mt-3'

                />
            </div>
            <div className='max-w-[429px]'>
                <h3 className='text-2xl mb-6'>ABOUT ME</h3>
                <h2 className='text-3xl mb-7'>
                    Hello, I am a Freelance Front-End Developer. Working for over 2 years.

                </h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the  have suffered alteration in some form, by injected humour, or  randomised.
                </p>

                <Button className='rounded-none bg-[#21CD85] border-2 border-[#504E4E] py-5 mt-6'>Download CV</Button>
            </div>
        </div >
    )
}
