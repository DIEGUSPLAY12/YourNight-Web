import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#2e104f] bg-[#09030f]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-xs">YN</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">YourNight</span>
        </div>
        
        <p className="text-purple-300/50 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} YourNight. All rights reserved. Must be 18+ to use.
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-purple-300/50 text-sm">
            <ShieldCheck className="w-4 h-4 text-fuchsia-500" />
            <span>Built with Supabase & React Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
