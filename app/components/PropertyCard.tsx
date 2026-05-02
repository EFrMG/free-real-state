import { Link } from "react-router";

interface PropertyCardProps {
  id: number;
  title: string;
  description: string;
  img: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  address: string;
}

export default function PropertyCard({
  id,
  title,
  description,
  img,
  bedrooms,
  bathrooms,
  price,
  address,
}: PropertyCardProps) {
  return (
    <Link
      to={`/properties/${id}`}
      className="m-4 block hover:opacity-100 group"
    >
      <div
        className="flex gap-4 p-4 rounded-lg shadow-lg inset-shadow-sm
        hover:shadow-md transition-shadow duration-250"
      >
        <img
          src={img}
          alt={title}
          className="w-full max-h-48 object-cover rounded-md"
        />

        <div className="stack-2">
          <h2
            className="text-xl font-bold text-amber-900
            group-hover:text-amber-700 transition-colors duration-425"
          >
            {title}
          </h2>
          <p className="text-gray-500 text-sm">{address}</p>
          <p className="text-gray-700 line-clamp-3">{description}</p>
          <div className="mt-auto flex justify-between items-center">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>
                <b>{bedrooms}</b> beds
              </span>
              <span>
                <b>{bathrooms}</b> baths
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-xl font-bold text-emerald-700/86
                line-through decoration-2 decoration-gray-500/64"
              >
                ${price}
              </span>
              <span className="text-2xl font-bold text-emerald-700">$0</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
