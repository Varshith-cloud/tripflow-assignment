import Image from "next/image";
import { Heart, MapPin, Star, Clock } from "lucide-react";

export default function DestinationCard() {
  return (
    <div className="w-[380px] rounded-3xl overflow-hidden bg-white shadow-2xl hover:-translate-y-3 hover:shadow-blue-300/40 transition-all duration-300">

      {/* Image Section */}
      <div className="relative overflow-hidden">

        <Image
          src="/BALI.jpg"
          alt="Bali"
          width={500}
          height={300}
          className="w-full h-72 object-cover hover:scale-110 transition duration-500"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Heart Button */}
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 hover:bg-red-50 transition-all duration-300">
          <Heart className="text-red-500" size={22} />
        </button>

        {/* Floating Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <span className="font-semibold text-sm">4.8</span>
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title & Price */}
        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Bali
            </h2>

            <p className="text-gray-500 text-sm">
              Indonesia
            </p>
          </div>

          <span className="text-3xl font-bold text-blue-600">
            ₹24,999
          </span>

        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-4 text-gray-600">

          <MapPin size={18} />

          <span>Nusa Dua Beach</span>

        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mt-3 text-gray-600">

          <Clock size={18} />

          <span>5 Days • 4 Nights</span>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">

          <Star
            className="fill-yellow-400 text-yellow-400"
            size={18}
          />

          <span className="font-semibold text-black">
            4.8
          </span>

          <span className="text-gray-500">
            (520 Reviews)
          </span>

        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4 leading-7">
          Experience crystal-clear beaches, luxury resorts,
          breathtaking sunsets, vibrant culture, and unforgettable
          memories in the tropical paradise of Bali.
        </p>

        {/* Button */}
        <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-white font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Book Your Trip →
        </button>

      </div>

    </div>
  );
}