import Welcome from './Welcome'
import NavigationLinks from './menu-search-singin/NavigationMenu'
import Search from './menu-search-singin/Search'
import SignInChart from './menu-search-singin/SignInChart'
import NavigationItemsCategory from './navigation-link/NavigationItemsCategory'

const Navigation = () => {
  return (
    <header>
      <Welcome />
      <div className='flex justify-between w-[80%] m-auto items-center py-4'>
        <NavigationLinks />
        <Search />
        <SignInChart />
      </div>
      <NavigationItemsCategory />
    </header>
  )
}
export default Navigation
