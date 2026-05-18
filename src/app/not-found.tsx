import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <span className="material-icons text-primary text-5xl">search_off</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
        Page Not Found
      </h1>
      
      <p className="text-muted-foreground max-w-md mb-8 text-lg">
        The page you are looking for doesn&apos;t exist or has been moved to a new location.
      </p>
      
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25"
      >
        Go Back Home
      </Link>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full">
        <Link 
          href="/courses" 
          className="p-4 border border-border rounded-xl hover:bg-muted transition-colors text-left group"
        >
          <div className="text-primary mb-1">
            <span className="material-icons">school</span>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors">Browse Courses</h3>
          <p className="text-xs text-muted-foreground">Explore our wide range of professional courses.</p>
        </Link>
        
        <Link 
          href="/contact" 
          className="p-4 border border-border rounded-xl hover:bg-muted transition-colors text-left group"
        >
          <div className="text-primary mb-1">
            <span className="material-icons">support_agent</span>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors">Contact Support</h3>
          <p className="text-xs text-muted-foreground">Get help from our support team.</p>
        </Link>
      </div>
    </div>
  );
}
