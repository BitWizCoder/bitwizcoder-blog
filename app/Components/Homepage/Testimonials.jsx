import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
    return (
        <div className='mb-40'>
            <h1 className='text-2xl font-light mb-6'>Testimonials</h1>
            <div className='flex max-w-[1023px] gap-8'>

                <div className='flex flex-col border border-gray-800 p-6 text-center items-center'>
                    <Image
                        src="/Avatar1.png"
                        width={81}
                        height={81}
                        alt="Picture of the author"

                    />
                    <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical</p>
                    <p>Nancy Solis</p>
                    <p>Graphic Designer</p>
                </div>

                <div className='flex flex-col border border-gray-800 p-6 text-center items-center'>
                    <Image
                        src="/Avatar1.png"
                        width={81}
                        height={81}
                        alt="Picture of the author"

                    />
                    <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical</p>
                    <p>Nancy Solis</p>
                    <p>Graphic Designer</p>
                </div>

                <div className='flex flex-col border border-gray-800 p-6 text-center items-center'>
                    <Image
                        src="/Avatar1.png"
                        width={81}
                        height={81}
                        alt="Picture of the author"

                    />
                    <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical</p>
                    <p>Nancy Solis</p>
                    <p>Graphic Designer</p>
                </div>

            </div>
        </div>
    )
}
