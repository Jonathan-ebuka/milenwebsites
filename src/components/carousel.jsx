"use client"

import useEmblaCarousel from "embla-carousel-react"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='embla max-w-lg mx-auto border' ref={emblaRef}>
      <div className='embla__container h-full'>
        <div className='embla__slide'>
          <img
            src='https://images.pexels.com/photos/12113101/pexels-photo-12113101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='object-cover h-[70vh] w-[100%]'
          />
        </div>
        <div className='embla__slide'>
          <img
            src='https://images.pexels.com/photos/12113101/pexels-photo-12113101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='object-cover h-[70vh]'
          />
        </div>
        <div className='embla__slide'>
          <img
            src='https://images.pexels.com/photos/12113101/pexels-photo-12113101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='object-cover h-[70vh]'
          />
        </div>
      </div>
    </div>
  )
}
