import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Searchbar from '../../Component/Searchbar/Searchbar'
import Usersearch from '../../Component/Usersearch/Usersearch'
import ItemCard from '../../Component/ItemCard/ItemCard'

export default function SearchItem() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Usersearch />
    </div>
  )
}
