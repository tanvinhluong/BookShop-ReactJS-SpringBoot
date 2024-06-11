import './SearchBar.css'
import axios from 'axios'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { API_BASE_URL } from '../../../config/apiConfig'
function SearchBar({ setResults, setVisible }) {
  const [input, setInput] = useState('')
  const jwt = localStorage.getItem('jwt')

  const fecthData = async (value) => {
    if (value.trim().length < 2) {
      setResults([])
      return
    }

    try {
      // const body = {
      //   key: "value",
      // };
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      }
      const results = await axios.get(
        `${API_BASE_URL}/api/products/search?q=${value}`,
        config
      )
      setResults(results.data)
      // .then((result) => {
      //   const results = result.data.results.filter((product) => {
      //     return (
      //       value &&
      //       product &&
      //       product.title &&
      //       product.title.toLowerCase().includes(value.toLowerCase())
      //     );
      //   });
      //   setResults(results);
      // });

      // console.log(response.data[1].title + "hehe");
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleChange = (value) => {
    setInput(value)
    fecthData(value)
    setVisible(true)
  }

  return (
    <div className="container-search mr-4">
      <input
        spellCheck="false"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setVisible(true)}
        onBlur={() => {
          setTimeout(() => {
            setVisible(false)
          }, 125)
        }}
      />
      <button className="search-button">
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default SearchBar
