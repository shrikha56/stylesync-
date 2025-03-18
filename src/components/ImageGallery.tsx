import Image from 'next/image';

interface ImageGalleryProps {
  category: 'closet' | 'outfits' | 'celebrity';
  title: string;
  description: string;
}

const mockImages = {
  closet: [
    { id: 1, src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', alt: 'White T-shirt' },
    { id: 2, src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop', alt: 'Blue Jeans' },
    { id: 3, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop', alt: 'Summer Dress' },
    { id: 4, src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop', alt: 'Leather Jacket' },
  ],
  outfits: [
    { id: 1, src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=500&fit=crop', alt: 'Casual Outfit' },
    { id: 2, src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop', alt: 'Business Outfit' },
    { id: 3, src: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop', alt: 'Evening Outfit' },
    { id: 4, src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop', alt: 'Sporty Outfit' },
  ],
  celebrity: [
    { id: 1, src: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop', alt: 'Celebrity Look 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop', alt: 'Celebrity Look 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop', alt: 'Celebrity Look 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=500&fit=crop', alt: 'Celebrity Look 4' },
  ],
};

export default function ImageGallery({ category, title, description }: ImageGalleryProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-500">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mockImages[category].map((image) => (
            <div key={image.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 