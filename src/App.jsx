import React from "react"
import Navbar from "./assets/Navbar"
import Card from "./assets/card"
import Hero from "./assets/Hero"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}