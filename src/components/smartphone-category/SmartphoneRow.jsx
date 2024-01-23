import CategoryHeader from '../CategoryHeader'
import SmartphonePhones from './SmartphonePhones'

const SmartphoneRow = () => {
  return (
    <div className='my-3'>
      <CategoryHeader first='Grab the best deal' second='Smartphones' />
      <div class='items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 m-auto mt-5'>
        <SmartphonePhones
          img='https://alta.ge/images/thumbnails/270/250/detailed/300/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__ww-EN_mwco-03_ov3l-jm.jpg.jpg'
          name='Iphone 15 Pro'
          price='1800'
          save='900'
          off='100'
        />
        <SmartphonePhones
          img='https://alta.ge/images/thumbnails/270/250/detailed/274/%5BGlobal_version%5D_SM-S918_GalaxyS23Ultra_Front_PhantomBlack_shsv-xf_w4w3-xm.jpg.jpg'
          name='Galaxy S23 Ultra'
          price='1400'
          save='300'
        />
        <SmartphonePhones
          img='https://alta.ge/images/thumbnails/270/250/detailed/300/639169-Product-0-I-638301484203042900_bdpf-6j_d7rs-6o_fnhs-zk.webp.jpg'
          name='Iphone 15'
          price='1800'
          save='900'
        />
        <SmartphonePhones
          img='https://alta.ge/images/thumbnails/270/250/detailed/259/WWEN_iPhone14Pro_Q422_Gold_PDP-IMAGES_Position-1a.jpg.jpg'
          name='Iphone 14 Pro'
          price='1800'
          save='900'
        />
        <SmartphonePhones
          img='https://alta.ge/images/thumbnails/270/250/detailed/259/WWEN_iPhone14Plus_Q422_Purple_PDP_Image_Position-1a_gdd6-ci.jpg.jpg'
          name='Iphone 14 Plus'
          price='1800'
          save='900'
        />
      </div>
    </div>
  )
}

export default SmartphoneRow
