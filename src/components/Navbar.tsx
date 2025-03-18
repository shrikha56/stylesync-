import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">StyleSync</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/closet" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              My Closet
            </Link>
            <Link href="/outfits" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Outfit Builder
            </Link>
            <Link href="/discover" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Discover
            </Link>
            <Link href="/celebrity-looks" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Celebrity Looks
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/login" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 