import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";

const navItems = [
    {
        name: 'Home',
        link: '#intro',
        icon: (<HiOutlineHome className="size-6" />)
    },
    {
        name: 'About',
        link: '#about',
        icon: (<HiOutlineHome className="size-6" />)
    },
    {
        name: 'Skills',
        link: '#skills',
        icon: (<HiOutlineHome className="size-6" />)
    },

]

export default function Sidebar() {
    return (
        <div className='bg-[#FAFAFF] text-[#2D2D2D] w-[209px] h-screen fixed'>

            <div className='flex flex-col items-center mt-11'>
                <Image
                    src="/profile.png"
                    width={123}
                    height={126}
                    alt="Picture of the author"

                />
                <h3 className='text-lg'>Md Noman</h3>
            </div>

            {/* Nav Items */}
            <div className='flex flex-col mt-24'>

                {
                    navItems.map((item, index) => (
                        <>
                            <div className='flex gap-3 mb-3 pl-6 items-center'>
                                {item.icon}
                                <Link className='' href={`/${item.link}`}>{item.name}</Link>
                            </div>
                            <hr class="w-[209px] h-[1px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-1" />
                        </>
                    ))
                }


            </div>

        </div>
    )
}
