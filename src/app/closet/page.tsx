import ImageGallery from '@/components/ImageGallery';

export default function ClosetPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            My Digital Closet
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Organize your wardrobe digitally and get AI-powered outfit suggestions.
          </p>
        </div>
        
        <ImageGallery
          category="closet"
          title="My Clothes"
          description="Browse through your digital wardrobe"
        />
        
        <ImageGallery
          category="outfits"
          title="Suggested Outfits"
          description="AI-generated outfit combinations based on your style"
        />
        
        <ImageGallery
          category="celebrity"
          title="Celebrity Inspiration"
          description="Find similar pieces to match your favorite celebrity looks"
        />
      </div>
    </div>
  );
} 