import axios from 'axios';

const Features = async () => {
  const response = await axios.get(
    `${process.env.SERVICE_API_URL}/experiences/products`,
  );
  console.debug(response.data);

  const products = [
    {
      id: '1',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain mug with teal glaze.',
    },
    {
      id: '2',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: '3',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Caramel leather key ring with brass metal loops',
    },
    {
      id: '3',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Caramel leather key ring with brass metal loops',
    },
    {
      id: '3',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Caramel leather key ring with brass metal loops',
    },
    {
      id: '3',
      name: 'Focus Paper Refill',
      href: '#',
      color: 'blue',
      price: 'R$ 10',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Caramel leather key ring with brass metal loops',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="size-full object-cover object-center lg:size-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Features };
