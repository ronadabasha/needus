export type Product = {
    id: number,
    name: string,
    brand: string,
    model: string,
    stock: number,
    rating: number,
    price: number,
    oldPrice: number,
    currency: string,
    description: string[],
    category: string,
    images: string[],
    measurement: string[]
}

const products:Product[] = [
    {
      "id": 0,
      "name": "LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR",
      "brand": "LG",
      "model": "OLED42C2PSA",
      "stock": 2,
      "rating": 3,
      "price": 600.72,
      "oldPrice":800.00,
      "currency": "usd",
      "description": ["a9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling", "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume", "Hands-free Voice Control, Always Ready", "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode", "Eye Comfort Display: Low-Blue Light, Flicker-Free"],
      "category": "men's clothing",
      "images": ["/assets/products/product-1/1.png", "/assets/products/product-1/2.png", "/assets/products/product-1/3.png","/assets/products/product-1/4.png"],
      "measurement": ["106 cm (42)","121 cm (48)","139 cm (55)","164 cm (65)","196 cm (77)","210 cm (83)"]
    },
    
  ]

  export default products