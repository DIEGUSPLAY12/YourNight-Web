import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-900 bg-black">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">APK</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">DirectDownloader</span>
        </div>
        
        <p className="text-neutral-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} DirectDownloader Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>MD5 Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
