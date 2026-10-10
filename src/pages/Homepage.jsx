import { FiInstagram } from "react-icons/fi"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { FaPinterest, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import videoBg from "../assets/megan_sizzle.mp4"

const Homepage = () => {
  return (
    <main className='fixed inset-x-0 top-0 h-lvh overflow-hidden'>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='relative px-10 w-[100%] h-full flex items-end justify-between p-10 pb-[calc(100lvh-100dvh+6.5rem+env(safe-area-inset-bottom))] lg:pb-10'>
        <div className='text-center'>
          <h2 className='text-2xl text-white font-bold text-center'>
            NEW COLLECTIONS
          </h2>

          <Link
            to='/stores'
            className='text-sm font-bold text-white flex items-center gap-2 text-center'
          >
            Shop now
            <ArrowRightIcon className='h-4 w-4 text-white' aria-hidden='true' />
          </Link>
        </div>

        <div className='hidden lg:flex lg:gap-10 lg:justify-end items-start'>
          <Link to='/'>
            <FaPinterest fontSize='1.5em' color='white' />
          </Link>

          <Link to='/'>
            <EnvelopeIcon className='h-6 w-6 text-white' aria-hidden='true' />
          </Link>

          <Link to='/'>
            <FiInstagram fontSize='1.5em' color='white' />
          </Link>

          <Link to='/'>
            <FaTiktok fontSize='1.5em' color='white' />
          </Link>
        </div>
      </div>    </main>
  )
}

export default Homepage
