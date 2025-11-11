export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center text-sm text-gray-600 py-8 border-t">
      <div className="flex flex-col items-center gap-2 px-4">
        <p>© 2025 BrandName. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
