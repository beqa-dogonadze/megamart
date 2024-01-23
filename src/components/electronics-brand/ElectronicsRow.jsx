import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import CategoryHeader from '../CategoryHeader'
import SliderItem from '../slider/SliderItem'
const ElectronicsRow = () => {
  return (
    <div className='my-6'>
      <CategoryHeader first='Top' second='Electonics brand' />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        breakpoints={{
          1400: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1
          }
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper mt-6 swip-slide'
      >
        <SwiperSlide className=''>
          <SliderItem img='https://www.dealcorner.in/uploads/productimage/large/14443_1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://cdn-files.kimovil.com/deal_screenshot/0009/44/thumb_843412_deal_screenshot_x_big.png' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fa79f7b7e-b80a-4f2c-8c06-1231a61d173b_Thumb.png&w=1920&q=60' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://www.dealcorner.in/uploads/productimage/large/14443_1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://www.bata.com/on/demandware.static/-/Sites-bata-in-Library/default/dw6df0077f/PLP/Thin_M_EOSS.png' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fa79f7b7e-b80a-4f2c-8c06-1231a61d173b_Thumb.png&w=1920&q=60' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default ElectronicsRow
