import Share from "@/components/Share";
import Feed from "@/components/feed";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className=''>
      <div className='flex px-4 pt-4 justify-between text-textGray font-bold border-b-[1px] border-borderGray'>
        <Link href='/' className='pb-3 items-center border-b-4 border-iconBlue' >For you</Link>
        <Link href='/' className='pb-3 items-center' >Following</Link>
        <Link href='/' className='pb-3 hidden md:flex items-center' >React.js</Link>
        <Link href='/' className='pb-3 hidden md:flex items-center' >Javascript</Link>
        <Link href='/' className='pb-3 hidden md:flex items-center' >CSS</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage