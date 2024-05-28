import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">URL Shortener</h1>
        <p className="mt-4 text-lg text-gray-400">Shorten your URLs quickly and easily</p>
        <Link
          href="/links"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          My Links
        </Link>
      </div>
    </div>
  );
}
