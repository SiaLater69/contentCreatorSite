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
    id:1,
    name:"OUR LEGACY | Camion Ankle Boots",
    description:"Our Legacy's Camion ankle boots represent a perfect balance between style and functionality",
    price:"$423 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952446-1729872851631-zoom-7107746-1724100426641-190a205bc4a4dde9360f778ac5bcf50e_705e6ba7-6097-4a10-b876-abbf4d994471.jpg",
    shopUrl:"https://www.baltini.com/products/our-legacy-camion-ankle-boots-1724399322412910168"
    },
{
    id:2,
    name:"ABERCROMBIE & FITCH | Ultra Baggy Jean - Black",
    description:"Great alternative to the Calvin Klein",
    price:"$90 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952461-1729872882812-zoom-7469677-1725394904706-4f38dac3-6a01-4f83-a832-b5dc3f84e3a9_KIC_131-4190-00229-975_model5.jpg",
    shopUrl:"https://www.abercrombie.com/shop/wd/p/ultra-baggy-jean-57835821?categoryId=6570710&faceout=model&seq=27"
    },

  {
    id: 3,
    name: "RONNING | Everyday Fisherman Sweater - Sage Green",
    description: "I chose a size extra small.",
    price: "$193 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-9021067-1730100581681-zoom-8206458-1727690010115-SAGEFISHERMANBODY1.jpg",
    shopUrl: "https://www.ronning.store/products/everyday-fisherman-sweater-sage-green"
  },
{
    id: 4,
    name: "COS | Crescent Crossbody Bag - Leather",
    description: "Debuting in the Autumn Winter menswear collection, this refined bag is crafted from premium chrome-free leather with a light layer of padding.",
    price: "$175 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-9021070-1730100617180-zoom-7108029-1724101018487-4c80d5a9-9e50-4f4e-ac82-d874c5c4fabb_CosCrescentBag.jpeg",
    shopUrl: "https://www.cos.com/en/men/accessories/bags-and-wallets/bags/product.crescent-crossbody---leather-black.1179492001.html"
  },
{
    id: 5,
    name: "ZARA | TRF Wide-Leg Mid-Rise Jeans",
    description: "Mid-rise jeans with five pockets. Faded effect.",
    price: "R899 ZAR",
    imageSrc: "https://static.shopmy.us/pins/zoom-9021072-1730100632402-zoom-7352799-1724952641439-9802c5e5-80a5-41f9-bcf5-fa25bf8e4461_08727020407-e1.jpg",
    shopUrl: "https://www.zara.com/za/en/trf-wide-leg-mid-rise-jeans-p08727840.html?v1=377126219&v2=2132120"
},
{
    id:6,
    name:"FILIPPA K | London Coat",
    description:"Single breasted tailored coat with a relaxed fit. Made in a brushed wool blend, and fully lined",
    price:"$690 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952529-1729873017217-29133-1433-AW23-0070-F-9.jpg",
    shopUrl:"https://www.filippa-k.com/za/en/london-coat/29133-1433.html?cjevent=06d16509952711ef80f61b080a18b8f6"
  },
  {
    id:10,
    name:"STUSSY | Basic Stock Low Pro Cap 'burgundy'",
    description:"",
    price:"Currently Unavailable",
    imageSrc:"https://static.shopmy.us/pins/zoom-9021078-1730100676493-zoom-7107730-1724100376819-1087083_01.jpg.jpeg",
    shopUrl:"https://www.goat.com/apparel/stussy-basic-stock-low-pro-cap-burgundy-1311070-burg"
  },
  {
    id:10,
    name:"MAISON MARGIELA | Black Tabi Leather Loafers",
    description:"Polished calfskin loafers in black.",
    price:"$1245 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-9021122-1730101148986-eba0818a-3347-4776-b54f-60a572c8f002_18885444_42407540_2048.jpg",
    shopUrl:"https://www.ssense.com/en-za/men/product/maison-margiela/black-tabi-loafers/16218371"
  },
]

export default function October27() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Weekend with the Boys in Paris <br/> [October27]</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a perfectly coordinated ensemble that combines style, comfort, and versatility.
          </p>
        </div>
            <div className="flex justify-center h-[500px] w-full">
                <img src="https://production-shopmyshelf-uploads.s3.us-east-2.amazonaws.com/img-sociallink-1730100485090" alt="october 27 outfit"/>
            </div>
            <br/>
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
