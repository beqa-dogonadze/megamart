import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import SliderItem from './SliderItem'
const Slider = () => {
  return (
    <div className='my-6'>
      <Swiper
        cssMode={true}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        <SwiperSlide>
          <SliderItem img='https://assets.dragonmart.ae//pictures/0103296_DragonMart_categorylisting_computer&electronics_1of3.jpeg' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5ac904ab-86df-4b75-af20-fb7b2c4182af_Thumb.png&w=1920&q=60' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3fdb8202-f504-4e6a-bffe-cea19c58731f_Thumb.png&w=1920&q=60' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem img='https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fa79f7b7e-b80a-4f2c-8c06-1231a61d173b_Thumb.png&w=1920&q=60' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Slider
