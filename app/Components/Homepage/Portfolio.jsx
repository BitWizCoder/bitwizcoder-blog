import Link from 'next/link'
import React from 'react'



const navItems = [
    { name: 'All' },
    { name: 'Webdesign' },
    { name: 'IOS Development' },
    { name: 'Android Developmnt' },
    { name: 'Backed-Development' },
    { name: 'UI/UX Design' },
]

const images = [
    { image: '/portfolio/portfolio1.png' },
    { image: '/portfolio/portfolio2.png' },
    { image: '/portfolio/portfolio3.png' },
    { image: '/portfolio/portfolio4.png' },
    { image: '/portfolio/portfolio5.png' },
    { image: '/portfolio/portfolio6.png' },
    { image: '/portfolio/portfolio7.png' },
    { image: '/portfolio/portfolio8.png' },
    { image: '/portfolio/portfolio9.png' },


]

export default function Portfolio() {
    return (
        <>
            <div className='mb-40'>
                <h1 className='text-2xl font-light mb-6'>Portfolio</h1>
                <div className='flex gap-8'>
                    {
                        navItems.map(item => (
                            <Link href={'/'} className='border-b-4 border-white hover:border-b-4 hover:border-blue-400'>{item.name}</Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
