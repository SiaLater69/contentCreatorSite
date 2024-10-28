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
    name: "MAISON MARGIELA | Brown Tabi Loafers",
    description: "Polished leather loafers in brown.",
    price: "£870 GBP",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952372-1729872738133-zoom-6410759-1721302362315-maison-margiela-brown-tabi-loafers.jpg",
    shopUrl: "https://www.ssense.com/en-gb/men/product/maison-margiela/brown-tabi-loafers/16218391"
  },
  {
    id: 2,
    name: "COS | Wide-Leg Cotton Utility Pants | Mole",
    description: "Utilitarian design is an assured way to elevate the everyday uniform. Cut in a relaxed shape, these trousers are made from structured cotton-canvas and designed with practical pockets inspired by workwear.",
    price: "$135 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952385-1729872756906-da039389-b661-458c-a94e-086d9d92f7cb_CosUtilityPants.jpeg",
    shopUrl: "https://www.cos.com/en/men/menswear/trousers/product.wide-leg-cotton-utility-trousers-brown.1243816002.html"
  },
  {
    id: 3,
    name: "TIGER OF SWEDEN | Finnan Coat",
    description: "My option is not available. This is a similar silhouette.",
    price: "$699 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952398-1729872780173-zoom-7119118-1724150542454-T69502018_284_lookbook2.jpg",
    shopUrl: "https://www.tigerofsweden.com/us/en/men/outerwear/finnan-coat-110908284.html"
  },
  {
    id: 4,
    name: "A.P.C | Camille Scarf",
    description: "Long wide scarf in Merino wool-cashmere blend.",
    price: "$225 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952404-1729872790643-zoom-8035262-1727190718851-WVBBR-M15174IAK_01.jpg",
    shopUrl: "https://www.apc-us.com/products/wvbbr-m15174?variant=39920169877603"
  },
  {
    id:5,
    name:"NORSE PROJECTS | Wool Cotton Rib Beanie",
    description:"A short beanie inspired by the classic watch cap worn by the US Navy",
    price:"$90 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952418-1729872815001-zoom-7119238-1724151825422-46068_d788e4a6fd-n95-0840-7004-01-packshot-s_big.jpg",
    shopUrl:"https://www.norseprojects.com/store/men/beanies/n95-0840-7004-watch-cap-woolcotton"
  },
  {
    id:6,
    name:"OUR LEGACY | Camion Ankle Boots",
    description:"Our Legacy's Camion ankle boots represent a perfect balance between style and functionality",
    price:"$423 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952446-1729872851631-zoom-7107746-1724100426641-190a205bc4a4dde9360f778ac5bcf50e_705e6ba7-6097-4a10-b876-abbf4d994471.jpg",
    shopUrl:"https://www.baltini.com/products/our-legacy-camion-ankle-boots-1724399322412910168"
  },
  {
    id:7,
    name:"OUR LEGACY | Jacket With Zip",
    description:"My colourway sold out unfortunately.",
    price:"$481 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952454-1729872864298-zoom-7119825-1724155623968-3cbf55505d8934fc18c54569425ec3f8.jpg",
    shopUrl:"https://www.baltini.com/products/our-legacy-jacket-with-zip-1724170767327593965"
  },
  {
    id:8,
    name:"ABERCROMBIE & FITCH | Ultra Baggy Jean - Black",
    description:"Great alternative to the Calvin Klein",
    price:"$90 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952461-1729872882812-zoom-7469677-1725394904706-4f38dac3-6a01-4f83-a832-b5dc3f84e3a9_KIC_131-4190-00229-975_model5.jpg",
    shopUrl:"https://www.abercrombie.com/shop/wd/p/ultra-baggy-jean-57835821?categoryId=6570710&faceout=model&seq=27"
  },
  {
    id:9,
    name:"RONNING | Everyday Beanie - Heather Grey",
    description:"",
    price:"$60 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952471-1729872903433-zoom-7119176-1724151229292-GREYBEANIE1.jpg",
    shopUrl:"https://www.ronning.store/collections/accessories/products/everyday-beanie-heather-grey"
  },
  {
    id:10,
    name:"FILIPPA K | London Coat",
    description:"Single breasted tailored coat with a relaxed fit. Made in a brushed wool blend, and fully lined",
    price:"$690 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952529-1729873017217-29133-1433-AW23-0070-F-9.jpg",
    shopUrl:"https://www.filippa-k.com/za/en/london-coat/29133-1433.html?cjevent=06d16509952711ef80f61b080a18b8f6"
  },
  {
    id:11,
    name:"ZARA | TRF Wide-Leg Mid-Rise Jeans",
    description:"Mid-rise jeans with five pockets. Faded effect",
    price:"R899 ZAR",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952538-1729873032396-zoom-7289781-1724771011110-zoom-7098493-1724082435251-32124122-9e1a-4250-83c5-7fc2583d5790_ZaraTRFWideLeg.jpg",
    shopUrl:"https://www.zara.com/za/en/trf-wide-leg-mid-rise-jeans-p08727840.html?v1=377126219"
  },
  {
    id:12,
    name:"A.P.C | Diane Shopping Bag",
    description:"Horizontal tote bag in forest green corduroy with 'A.P.C.' screenprint.",
    price:"€150 EUR",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952580-1729873104114-zoom-7099976-1724085477666-coezq-m61443lzz_01_1721908126.jpg",
    shopUrl:"https://en.apc.fr/diane-shopping-bag-lzz-coezq-m61443.html"
  },
  {
    id:13,
    name:"COS | Crescent Crossbody Bag - Leather",
    description:"Debuting in the Autumn Winter menswear collection, this refined bag is crafted from premium chrome-free leather with a light layer of padding",
    price:"$175 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8952603-1729873137118-zoom-7108029-1724101018487-4c80d5a9-9e50-4f4e-ac82-d874c5c4fabb_CosCrescentBag.jpeg",
    shopUrl:"https://www.cos.com/en/men/accessories/bags-and-wallets/bags/product.crescent-crossbody---leather-black.1179492001.html"

  }

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
