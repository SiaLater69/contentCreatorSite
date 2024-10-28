import React from 'react'
import { motion } from 'framer-motion'

interface Image {
  id: number
  src: string
  alt: string
  ImageLink:string
  className: string
}

const images: Image[] = [
  {
    id: 1, src: "https://i.postimg.cc/qRxrJnLV/ethan.jpg", alt: "Suns out, but I will still wear all black 🫡", className: "col-span-2 row-span-2",
    ImageLink: 'https://www.instagram.com/p/Ctg4rW2NnCN/?img_index=4'
  },
  {
    id: 2, src: "https://i.postimg.cc/yNK0gCKq/main1.jpg", alt: "Life lately = Fantastique 🤌🏽", className: "col-start-3 row-start-1",
    ImageLink: 'https://www.instagram.com/p/CxfqJrKNWyn/?img_index=1'
  },
  {
    id: 3, src: "https://i.postimg.cc/tJp6R0F2/pic3.jpg", alt: "Fulfilling my son duties by carrying moms groceries 🫡", className: "col-start-3 row-start-2",
    ImageLink: 'https://www.instagram.com/p/C_lCS5GNCgo/?img_index=1'
  },
  {
    id: 4, src: "https://i.postimg.cc/VLBmrM5f/ethan7.jpg", alt: "Leeds Art Gallery 🎭", className: "col-span-2 row-span-2",
    ImageLink: 'https://www.instagram.com/p/CdTSawHqIq8/?img_index=1'
  },
  {
    id: 5, src: "https://i.postimg.cc/hP4mHBDG/pic2.jpg", alt: "Fulfilling my son duties by carrying moms groceries 🫡", className: "col-start-3 row-start-3",
    ImageLink: 'https://www.instagram.com/p/C_lCS5GNCgo/?img_index=1'
  },
  {
    id: 6, src: "https://i.postimg.cc/L5n03c3B/ethan6.jpg", alt: "Procrastination > uni work 🫡", className: "col-start-3 row-start-4",
    ImageLink: 'https://www.instagram.com/p/CtPCGhgNHyR/?img_index=1'
  },
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
            <a href={image.ImageLink} target='_blank'>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}