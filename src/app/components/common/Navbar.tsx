import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='border-b border-zinc-200 bg-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight text-zinc-900'
        >
          NEXUS<span className='text-blue-600'>ASSETS</span>
        </Link>

        <div className='flex items-center gap-6 text-sm font-medium text-zinc-600'>
          <Link
            href='/browse'
            className='hover:text-zinc-900 transition-colors'
          >
            Browse
          </Link>
          <Link
            href='/templates'
            className='hover:text-zinc-900 transition-colors'
          >
            Templates
          </Link>

          {/* Cart Icon (Placeholder UI for now) */}
          <button className='relative p-2 text-zinc-700 hover:text-zinc-900 transition-colors'>
            <span className='sr-only'>View cart</span>
            🛒
            <span className='absolute top-0 right-0 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center'>
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
