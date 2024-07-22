import { outfits } from "@/lib"
import { Link } from "react-router-dom"
// /${outfit.id}

const ClothingList = () => {
  return (
    <div className='grid grid-cols-2 auto-rows-[370px]  lg:grid-cols-4 lg:auto-rows-[500px] gap-3 my-7'>
      {outfits.map((outfit) => (
        <Link key={outfit.id} to={`/product`} className=''>
          <div className=''>
            <img src={outfit.image} className='object-cover' alt='' />
          </div>

          <div className='flex flex-col items-center justify-center'>
            {/* name */}
            <h3>{outfit.name}</h3>
            {/* color */}
            <p>{outfit.color} Colors</p>
            {/* price */}
            <span>{outfit.price}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ClothingList
