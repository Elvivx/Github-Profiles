function Search() {
  return (
    <>
      <div className='search'>
        <h1>Search for Profile 🙂</h1>
        <div className='input'>
          <input placeholder='Search' value={"hi"} onChange={change} />
          <button>Search</button>
        </div>
      </div>
    </>
  )
}
const change = () => {
  console.log("shit")
}
export default Search
