
const SearchBar = () => {


  return (
    <div className="absolute top-8 left-8 bottom-8 right-8 z-10">
    <input
      type="text"
      placeholder="Search for cities"
      className="p-2 rounded border border-gray-400 w-64"
    />
    <button className="p-2 ml-2 bg-gray-500 text-white rounded">Search</button>
  </div>
  )
}

export default SearchBar
