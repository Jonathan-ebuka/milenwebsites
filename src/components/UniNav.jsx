import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const UniNav = () => {
  return (
    <div className=' flex flex-col items-center justify-end '>
      <h2 className='text-2xl text-white font-bold cursor-none '>
        COLLECTIONS
      </h2>

      <Link
        to='/stores'
        className='text-sm font-bold text-white flex items-center gap-2'
      >
        Shop now
        <ArrowRightIcon className='h-4 w-4 text-white' aria-hidden='true' />
      </Link>
    </div>
  )
}

export default UniNav
