import NavigationLinks from './menu-search-singin/NavigationMenu'
import Search from './menu-search-singin/Search'
import SignInChart from './menu-search-singin/SignInChart'

const Navigation = () => {
  return (
    <header className='px-6 p-3 sticky top-0 z-50 w-full bg-white border-y border-gray-300'>
      <div className='flex justify-between gap-3 items-center'>
        <NavigationLinks />
        <Search />
        <SignInChart />
      </div>
    </header>
  )
}
export default Navigation
