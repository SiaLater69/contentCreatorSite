import React from 'react'
import { motion } from 'framer-motion'

interface Image {
  id: number
  src: string
  alt: string
  className: string
}

const images: Image[] = [
  { id: 1, src: "https://i.postimg.cc/qRxrJnLV/ethan.jpg", alt: "Portfolio Image 1", className: "col-span-2 row-span-2" },
  { id: 2, src: "https://i.postimg.cc/yNK0gCKq/main1.jpg", alt: "Portfolio Image 2", className: "col-start-3 row-start-1" },
  { id: 3, src: "https://i.postimg.cc/tJp6R0F2/pic3.jpg", alt: "Portfolio Image 3", className: "col-start-3 row-start-2" },
  { id: 4, src: "https://i.postimg.cc/050mWQq3/pic4.jpg", alt: "Portfolio Image 4", className: "col-span-2 row-span-2" },
  { id: 5, src: "https://i.postimg.cc/hP4mHBDG/pic2.jpg", alt: "Portfolio Image 5", className: "col-start-3 row-start-3" },
  { id: 6, src: "https://i.postimg.cc/mDQMGZ1P/pic5.jpg", alt: "Portfolio Image 6", className: "col-start-3 row-start-4" },
]

export default function ImageGrid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-[1200px]">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className={`relative overflow-hidden rounded-lg shadow-lg ${image.className}`}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}