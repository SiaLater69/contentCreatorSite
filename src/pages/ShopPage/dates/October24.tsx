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
    name: "COS | Wide-Leg Cotton Utility Pants | Mole",
    description: "Utilitarian design is an assured way to elevate the everyday uniform. Cut in a relaxed shape, these trousers are made from structured cotton-canvas and designed with practical pockets inspired by workwear.",
    price: "$135 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952385-1729872756906-da039389-b661-458c-a94e-086d9d92f7cb_CosUtilityPants.jpeg",
    shopUrl: "https://www.cos.com/en/men/menswear/trousers/product.wide-leg-cotton-utility-trousers-brown.1243816002.html"
  },
  {
    id: 2,
    name: "COS | The Extra Fine T-Shirt",
    description: "The COS design team have created the ultimate feel and fit with this durable yet feather-light tee",
    price: "$35 USD",
    imageSrc: "https://lp.cosstores.com/app001prod?set=source[/97/a1/97a1a0d421ccbb14a10b890c365c907bc4b989c2.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    shopUrl: "https://www.cos.com/en/men/menswear/t-shirts/product.classic-t-shirt-white.1011037002.html"
  },
  {
    id: 3,
    name: "AMI PARIS | Sweaters",
    description: "My colorway not available on the site currently 😞",
    price: "",
    imageSrc: "https://static.shopmy.us/pins/zoom-8913659-1729779838368-zoom-7108542-1724102239515-dfc85aaa6e9c70b97cde85cc71cf7337.jpg",
    shopUrl: "https://www.baltini.com/products/ami-paris-sweaters-47?smsclickid=20acf9f4-78de-47e0-a088-fce97b78ffbd"
  },
  {
    id:4,
    name:"GANT | Classic Leather Belt - Brown",
    description:"GANT logo debossed on belt keeper Silver-tone buckle",
    price:"$100 USD",
    imageSrc:"https://static.shopmy.us/pins/zoom-8913663-1729779855335-zoom-7100077-1724085632149-time__1723115710__202403-9940155-274-flat-fv-1.jpg",
    shopUrl:"https://gant.com/classic-leather-belt-rich-brown/9940155-274.html"
  },
  {
    id: 5,
    name: "MAISON MARGIELA | Brown Tabi Loafers",
    description: "Polished leather loafers in brown.",
    price: "£870 GBP",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952372-1729872738133-zoom-6410759-1721302362315-maison-margiela-brown-tabi-loafers.jpg",
    shopUrl: "https://www.ssense.com/en-gb/men/product/maison-margiela/brown-tabi-loafers/16218391"
  },
  {
    id: 6,
    name: "TIGER OF SWEDEN | Finnan Coat",
    description: "My option is not available. This is a similar silhouette.",
    price: "$699 USD",
    imageSrc: "https://static.shopmy.us/pins/zoom-8952398-1729872780173-zoom-7119118-1724150542454-T69502018_284_lookbook2.jpg",
    shopUrl: "https://www.tigerofsweden.com/us/en/men/outerwear/finnan-coat-110908284.html"
  },
  {
    id: 7,
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
]

export default function October24() {
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
