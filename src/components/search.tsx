import React from 'react'
import Image from "@/components/image";

const Search = () => {
      return (
          <div className='bg-inputGray py-2 px-4 flex items-center rounded-full gap-4'>
                <Image path='icons/explore.svg' alt='search' w={16} h={16} />
                <input type='text' placeholder='Search' className='bg-transparent outline-none placeholder:text-textGray' />
          </div>
      )
}
export default Search
