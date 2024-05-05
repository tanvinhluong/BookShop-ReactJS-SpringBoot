import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { homeCarouselData } from './MainCarouselData' // Importing your carousel data

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    autoPlay
    autoPlayInterval={3000}
    disableButtonsControls
    showSlideInfo={true} // Hiển thị nút điều hướng
    items={homeCarouselData.map((item, index) => (
      <div key={index} className="item">
        <a href={item.path}>
          <img
            src={item.image}
            alt={`Slide ${index + 1}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
    ))}
  />
)

export default MainCarousel
