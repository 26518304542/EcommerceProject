export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Logo & Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">FB</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">IG</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">TW</a>
          </div>
        </div>

        {/* Column 2 — Company */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-800">Company</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
        </div>

        {/* Column 3 — Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-800">Legal</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Return Policy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookies</a>
        </div>

        {/* Column 4 — Newsletter */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-800">Join Our Newsletter</h3>
          <p className="text-sm text-gray-600">
            Get the latest updates and offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-l-md text-sm w-full"
            />
            <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">
            Will send you weekly updates.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-sm text-gray-600">
          <p>© 2025 Bandage. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
