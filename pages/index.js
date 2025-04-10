import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>MKS Diamond Tools Consulting</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">MKS Diamond Tools Consulting</h1>
        <p className="text-lg text-gray-700 mb-6">
          Delivering precision, durability, and performance for diamond cutting tool manufacturers worldwide.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Technical Consulting for Diamond Tool Manufacturing</li>
            <li>R&D Support and Innovation</li>
            <li>Material Characterization and Analysis</li>
            <li>Manufacturing Process Optimization</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Contact</h2>
          <p className="text-gray-700">Email: <a href="mailto:consult@mksdiamondtools.com" className="text-blue-600 hover:underline">consult@mksdiamondtools.com</a></p>
        </section>
        <footer className="text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} MKS Diamond Tools. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
