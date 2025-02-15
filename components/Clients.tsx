import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            Sharing thoughts from {' '}
            <span className='text-purple text-7xl'> amazing mates!</span>
        </h1>

        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards 
                items={testimonials}
                direction="right"
                speed="slow"
            />

            <div>
                {companies.map(({ id, img, name, nameImg}) => (
                    <div>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients