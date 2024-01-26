import CategoryHeader from '../CategoryHeader'
import SmartphonePhones from './SmartphonePhones'

const SmartphoneRow = () => {
  return (
    <div className='my-24'>
      <CategoryHeader first='Grab the best deal' second='Smartphones' />
      <div class='flex justify-center mt-5'>
        <div class='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4 m-auto'>
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/300/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__ww-EN_mwco-03_ov3l-jm.jpg.jpg'
            name='Iphone 15 Pro'
            price='2100'
            save='500'
            off='15'
          />
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/300/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__ww-EN_mwco-03_ov3l-jm.jpg.jpg'
            name='Iphone 15 Pro'
            price='2100'
            save='500'
            off='15'
          />
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/274/%5BGlobal_version%5D_SM-S918_GalaxyS23Ultra_Front_PhantomBlack_shsv-xf_w4w3-xm.jpg.jpg'
            name='Galaxy S23 Ultra'
            price='1400'
            save='300'
            off='10'
          />
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/300/639169-Product-0-I-638301484203042900_bdpf-6j_d7rs-6o_fnhs-zk.webp.jpg'
            name='Iphone 15'
            price='1800'
            save='900'
            off='20'
          />
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/259/WWEN_iPhone14Pro_Q422_Gold_PDP-IMAGES_Position-1a.jpg.jpg'
            name='Iphone 14 Pro'
            price='2200'
            save='400'
            off='10'
          />
          <SmartphonePhones
            img='https://alta.ge/images/thumbnails/270/250/detailed/259/WWEN_iPhone14Plus_Q422_Purple_PDP_Image_Position-1a_gdd6-ci.jpg.jpg'
            name='Iphone 14 Plus'
            price='1900'
            save='700'
            off='15'
          />
        </div>
      </div>
    </div>
  )
}

export default SmartphoneRow
