export default function PageContent({ children }) {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {children}
    </main>
  );
}
