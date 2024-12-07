import Image from 'next/image'
import React from 'react'

export default function Introduction() {
    return (
        <div id='intro' className='h-screen'>
            <div>

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
