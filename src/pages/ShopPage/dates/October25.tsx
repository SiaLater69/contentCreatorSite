import React from "react"
import { ShoppingBag, ExternalLink } from "lucide-react"

type ClothingItem = {
  id: number
  name: string
  description: string
  price: string
  imageSrc: string
  shopUrl: string
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    description: "Classic distressed denim with modern fit",
    price: "$89.99",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952372-1729872738133-zoom-6410759-1721302362315-maison-margiela-brown-tabi-loafers.jpg",
    shopUrl: "#"
  },
  {
    id: 2,
    name: "COS | Wide-Leg Cotton Utility Pants | Mole",
    description: "Premium cotton crew neck",
    price: "$29.99",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952385-1729872756906-da039389-b661-458c-a94e-086d9d92f7cb_CosUtilityPants.jpeg",
    shopUrl: "#"
  },
  {
    id: 3,
    name: "Slim-Fit Black Jeans",
    description: "Stretch denim with perfect fade",
    price: "$79.99",
    imageSrc: "https://production-shopmyshelf-uploads.s3.us-east-2.amazonaws.com/img-sociallink-1729872686201",
    shopUrl: "#"
  },
  // Add additional items as needed
]

export default function October25() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Today's Curated Outfit</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a perfectly coordinated ensemble that combines style, comfort, and versatility.
          </p>
        </div>

        <div className="space-y-12">
          {clothingItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
            >
              <div className="md:w-[260px] h-[260px]">
                <img
                  src={item.imageSrc}
                  alt={`${item.name} - ${item.description}`}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 md:px-8 mt-4 md:mt-0">
                <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-lg font-bold text-gray-900 mt-4">{item.price}</p>
                <a 
                  href={item.shopUrl}
                  aria-label={`Shop ${item.name}`}
                  className="flex items-center gap-2 mt-4 text-gray-900 underline hover:text-gray-700"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
