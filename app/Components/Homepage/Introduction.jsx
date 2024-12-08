import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Introduction() {
    return (
        <div id='intro' className='flex mt-40 items-center gap-28'>
            <div className='max-w-[405px]'>
                <h3 className='text-2xl'>Hello, I am</h3>
                <h1 className='text-6xl'>MD Noman</h1>
                <p className='text-lg mb-12'>UI/UX Designer & Front-End Developer</p>

                <p className='mb-[39px]'>Richard McClintock, a Latin professor at Hampden-Sydney College in  , looked up one of the more obscure Latin words, consectetur,  from a Lorem Ipsum passage.</p>

                <Button className='rounded-none bg-[#21CD85] border-2 border-[#504E4E] py-5'>Download CV</Button>
            </div>
            <div>
                <Image
                    src="/profile2.png"
                    width={503}
                    height={430}
                    alt="Picture of the author"

                />
            </div>
        </div>
    )
}
