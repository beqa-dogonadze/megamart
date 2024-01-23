import CategoryHeader from '../CategoryHeader'
import TopCategoriesItem from './TopCategoriesItem'

const TopCategoriesRow = () => {
  return (
    <div className='my-24'>
      <CategoryHeader first='Shop From' second='Top Categories' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 mt-5'>
        <TopCategoriesItem
          img='https://cdnvendoo.s3.eu-central-1.amazonaws.com/storage/products/2023-02/316183_(1)168501073604_09_185740539004_41_13_900x900.jpg'
          name='Smartphones'
        />
        <TopCategoriesItem
          img='https://i.ebayimg.com/images/g/FdUAAOSwH2tiJSjY/s-l1600.jpg'
          name='Watches'
        />
        <TopCategoriesItem
          img='https://media.veli.store/media/product/%E1%83%A1%E1%83%90%E1%83%A0%E1%83%94%E1%83%AA%E1%83%AE%E1%83%98_%E1%83%9B%E1%83%90%E1%83%9C%E1%83%A5%E1%83%90%E1%83%9C%E1%83%90_Samsung_WW90T4041CXLP_Washing__Machine_Silver_1.png'
          name='Electronics'
        />
        <TopCategoriesItem
          img='https://cdnvendoo.s3.eu-central-1.amazonaws.com/storage/products/2023-02/316183_(1)168501073604_09_185740539004_41_13_900x900.jpg'
          name='Smartphones'
        />
        <TopCategoriesItem
          img='https://i.ebayimg.com/images/g/FdUAAOSwH2tiJSjY/s-l1600.jpg'
          name='Watches'
        />
        <TopCategoriesItem
          img='https://media.veli.store/media/product/%E1%83%A1%E1%83%90%E1%83%A0%E1%83%94%E1%83%AA%E1%83%AE%E1%83%98_%E1%83%9B%E1%83%90%E1%83%9C%E1%83%A5%E1%83%90%E1%83%9C%E1%83%90_Samsung_WW90T4041CXLP_Washing__Machine_Silver_1.png'
          name='Electronics'
        />
        <TopCategoriesItem
          img='https://cdnvendoo.s3.eu-central-1.amazonaws.com/storage/products/2023-02/316183_(1)168501073604_09_185740539004_41_13_900x900.jpg'
          name='Smartphones'
        />
      </div>
    </div>
  )
}
export default TopCategoriesRow
