import { FiInstagram } from "react-icons/fi"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { FaPinterest, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import videoBg from "../assets/megan_sizzle.mp4"

const Homepage = () => {
  return (
    <main className=' h-[90vh] w-[100%]'>
      <div className=' px-10 w-[100%] h-[90vh] flex items-end justify-between p-10 -mb-1'>
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
      </div>

      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 -z-10 w-[100%] h-[100vh] object-cover'
      />
    </main>
  )
}

export default Homepage
