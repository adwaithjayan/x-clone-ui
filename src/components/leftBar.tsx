import React from 'react'
import Link from "next/link";
import Image from "@/components/image";

const menuList = [
      {
            id:1,
            name:'Homepage',
            link:'/',
            icon:'home.svg'
      },{
            id:2,
            name:'Explore',
            link:'/',
            icon:'explore.svg'
      },{
            id:3,
            name:'Notification',
            link:'/',
            icon:'notification.svg'
      },{
            id:4,
            name:'Messages',
            link:'/',
            icon:'message.svg'
      },{
            id:5,
            name:'Bookmarks',
            link:'/',
            icon:'bookmark.svg'
      },{
            id:6,
            name:'Jobs',
            link:'/',
            icon:'job.svg'
      },{
            id:7,
            name:'Communities',
            link:'/',
            icon:'community.svg'
      },{
            id:8,
            name:'Premium',
            link:'/',
            icon:'job.svg'
      },{
            id:9,
            name:'Profile',
            link:'/',
            icon:'profile.svg'
      },{
            id:10,
            name:'More',
            link:'/',
            icon:'more.svg'
      },
]

const LeftBar = () => {
      return (
          <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
                <div className='flex flex-col gap-4 items-center xxl:items-start'>
                      <Link href='/' className='pt-2 rounded-full hover:bg-[#181818]'>
                            <Image path='/icons/logo.svg' alt='logo' w={24} h={24} />
                      </Link>
                      <div className='flex flex-col gap-4'>
                            {menuList.map((menu) => (
                                <Link href={menu.link} key={menu.id} className='rounded-full pt-2 hover:bg-[#181818] flex items-center gap-4'>
                                      <Image path={`/icons/${menu.icon}`} alt={menu.name} w={24} h={24} />
                                      <span className='hidden xxl:inline'>{menu.name}</span>
                                </Link>
                            ))}
                      </div>
                      <Link
                          href="/compose/post"
                          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
                      >
                            <Image path="icons/post.svg" alt="new post" w={24} h={24} />
                      </Link>
                      <Link
                          href="/compose/post"
                          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
                      >
                            Post
                      </Link>
                </div>

                <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                            <div className='size-10 rounded-full overflow-hidden relative'>
                                  <Image path='/general/avatar.png' alt='adwaith' w={100} h={100}  tr={true}/>
                            </div>
                            <div className='hidden xxl:flex flex-col'>
                                  <span className='font-bold'>Adwaith Jayan</span>
                                  <span className='text-sm text-textGray'>@adwaithjayan</span>
                            </div>
                      </div>
                      <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
                </div>
          </div>
      )
}

export default LeftBar