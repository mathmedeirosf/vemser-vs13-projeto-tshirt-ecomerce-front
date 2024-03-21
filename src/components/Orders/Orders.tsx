import { Link } from 'react-router-dom';
import { Product } from '../ClientOrders/ClientOrders';

export default function Orders({ products }: { products: Product[] }) {
  return (
    <div className="width-1/2 flex justify-between items-center border-b-2 border-gray-200 py-4">
      <div className="width-1/2">
        <h2 className="text-lg font-semibold ps-3">{products[0].name}</h2>
        <p className="text-sm ps-3">Preço: {products[0].price}</p>
        <p className="text-sm ps-3">Quantidade: {products[0].quantity}</p>
      </div>
      <div className="text-lg font-semibold">
        R$:{' '}
        {products.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )}
      </div>
      <div className="grid gap-4 width-1/5">
        <Link
          to="/review-your-order"
          className="hidden box-border md:block border-2 border-primary bg-transparent text-primary font-medium px-4 lg:px-9 py-2  rounded-lg transition-colors hover:bg-primary hover:text-white ml-5"
        >
          Ver pedido
        </Link>
        <Link
          to="/catalog"
          className="hidden md:block border-2 border-transparent bg-black text-secondary font-medium px-4 lg:px-4 py-2 rounded-lg transition-opacity hover:opacity-80 ml-5"
        >
          Avalie o produto
        </Link>
      </div>
    </div>
  );
}
