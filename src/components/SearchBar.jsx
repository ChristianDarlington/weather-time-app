
const SearchBar = () => {

 const searchCity = () => {

  }

  return (
    <div className="absolute top-4 left-4 p-24 z-10 pl-12">
    <input
      type="text"
      placeholder="Search for cities"
      className="p-3 rounded border border-gray-400 w-64"
    />
    <button className="p-2 ml-2 bg-gray-500 text-white rounded">Search</button>
  </div>
  )
}

export default SearchBar
