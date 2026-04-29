import { ProductCart } from "@/components/AddProductToCart/AddToCard.interface";

export default function CartProducts({
  products,
}: {
  products: ProductCart[];
}) {
  return (
    <>
      {products.map((item: ProductCart) => (
        <div key={item._id} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <p className="text-[14px] font-semibold text-gray-800 line-clamp-1">
                {item.product.title}
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                {item.count} × {item.price} EGP
              </p>
            </div>
          </div>

          <p className="text-[15px] font-bold text-gray-900">
            {item.price * item.count}
          </p>
        </div>
      ))}
    </>
  );
}
