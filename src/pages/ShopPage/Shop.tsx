import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type ClothingItem = {
  id: number
  name: string
  date: string
  href: string
  imageSrc: string
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "The Weeks Fits",
    date: "October 25th",
    imageSrc: "https://production-shopmyshelf-uploads.s3.us-east-2.amazonaws.com/img-sociallink-1729872686201",
    href: '/October25'
  },
  {
    id: 2,
    name: "The Perfect Trousers",
    date: "October 24th",
    imageSrc: "https://static.shopmy.us/uploads/img-sociallink-1729779616892",
    href: '/October24'
  },
]

export default function DailyOutfitShowcase() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Today's Outfit Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clothingItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-full h-[500px] object-cover"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
                hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center text-white p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <Link to={item.href} className="text-lg font-medium underline">
                  View Details
                </Link>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
