import { useState } from "react";

interface ProductCheckoutCardProps {
  title: string;
  size: string;
  price: number;
  color: string;
  img: string;
}

const ProductCheckoutCard = ({
  title,
  size,
  price,
  color,
  img,
}: ProductCheckoutCardProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="md:grid md:grid-cols-[3fr,100px,100px,100px] md:items-center  md:py-5 py-2 shadow-md rounded-lg md:shadow-none">
      <div className="flex">
        <img src={img} alt={title} className="w-12 h-12 object-cover" />
        <div>
          <h3 className="text-lg font-semibold ps-3">{title}</h3>
          <p className="text-sm ps-3">
            Tamanho: {size} / Cor: {color}
          </p>
        </div>
      </div>
      <p className="hidden md:block">R$: {price}</p>

      <div className="flex justify-between flex-row-reverse items-center py-1 md:flex-row md:gap-6">
        <div
          className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg
        "
          data-hs-input-number
        >
          <div className="flex items-center gap-x-1.5">
            <button
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-input-number-decrement
              onClick={() => setQuantity(quantity - 1)}
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <input
              className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
              type="text"
              value={quantity}
              data-hs-input-number-input
              min={0}
              max={99}
            />
            <button
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-input-number-increment
              onClick={() => setQuantity(quantity + 1)}
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
