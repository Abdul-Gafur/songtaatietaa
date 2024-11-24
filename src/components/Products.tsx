import { HiInformationCircle } from 'react-icons/hi'
import prod1 from '../assets/products/product1.png'
import prod2 from '../assets/products/product2.png'
import prod3 from '../assets/products/product3.png'
import prod4 from '../assets/products/product4.png'

const ProductsPortfolio = () => {
  const products = [prod1, prod2, prod3, prod4]
  return (
    <div className="flex flex-wrap m-auto">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Product Portfolio
        </h1>
        <p className='mb-6'>
          <HiInformationCircle size={32} className='text-primary'/>
          We offer a range of nutritious products designed to support health and
          wellness in our community, tombrown, groundnut paste and Shea-butter.
        </p>
      </div>

      <ul className="flex flex-wrap gap-14">
        {products.map((product, index) => (
          <li
            key={index}
            className="relative group h-52 w-52 rounded-2xl overflow-hidden border-b-4 border-secondary/30 mx-auto"
            style={{ background: `url(${product})` }}
          >
            <div className=" absolute inset-0 top-full group-hover:top-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end invisible group-hover:visible transition-all duration-300 ease-linear">
              <p className='text-white mx-auto text-sm mb-2'>Product name</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPortfolio
