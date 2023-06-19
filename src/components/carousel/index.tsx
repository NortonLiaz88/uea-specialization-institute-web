import { Carousel } from '@material-tailwind/react'
import logoUrl from '../../../assets/images/hub_secondary.png'

export default function EnhancedCarousel() {
  return (
    <Carousel className="rounded-xl mt-60 max-w-6xl" autoplay loop>
      <img src={logoUrl} alt="image 1" className="h-128 w-full object-cover" />
      <img src={logoUrl} alt="image 2" className="h-128 w-full object-cover" />
      <img src={logoUrl} alt="image 3" className="h-128 w-full object-cover" />
    </Carousel>
  )
}
