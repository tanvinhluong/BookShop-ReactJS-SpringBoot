import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { Button, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const HomeSectionCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.4 },
  }

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext()
    }
  }

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev()
    }
  }

  const syncActiveIndex = ({ item }) => setActiveIndex(item)

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />)

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <Typography
        variant="h5"
        component="h2"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        Xem thêm
      </Typography>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
          ref={carouselRef}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-[]"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 "
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: 'rotate(-90deg)', color: 'black' }}
            />
          </Button>
        )}
      </div>
    </div>
  )
}

export default HomeSectionCarousel
