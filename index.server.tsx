
import { useShopQuery, gql, Link, Seo } from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function HomePage() {
  const {
    data: { products },
  } = useShopQuery({
    query: QUERY,
    preload: true,
  });

  return (
    <div className="bg-white min-h-screen p-8">
      <Seo type="homepage" data={{ title: 'Pixel Vault – Instant Digital Downloads' }} />
      <h1 className="text-4xl font-bold text-center mb-6">Pixel Vault</h1>
      <p className="text-center text-gray-600 text-lg mb-10">Instant access to powerful digital tools</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.nodes.map((product) => (
          <div key={product.id} className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">
              {product.variants.nodes[0].price.amount} {product.variants.nodes[0].price.currencyCode}
            </p>
            <Link
              to={`/products/${product.handle}`}
              className="bg-black text-white px-4 py-2 rounded-lg block text-center"
            >
              View & Download
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const QUERY = gql`
  query HomepageProducts {
    products(first: 6) {
      nodes {
        id
        title
        handle
        description
        variants(first: 1) {
          nodes {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
