import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Searchbar from '../../Component/Searchbar/Searchbar'
import ItemCard from '../../Component/ItemCard/ItemCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <ItemCard />
    </>
  )
}
