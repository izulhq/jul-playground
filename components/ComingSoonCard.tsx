import { Card } from "@/components/ui/card";

export function ComingSoonCard() {
  return (
    <div className="w-[320px]">
      <Card className="bg-white/70 backdrop-blur-sm shadow-md border border-black/10 hover:border-black/50 hover:shadow-none transition-all overflow-hidden h-[320px] flex flex-col">
        <div className="p-8 flex flex-col gap-6 items-center justify-center h-full">
          {/* Loading animation icon */}
          <div className="flex-shrink-0 w-20 h-20 relative">
            <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin absolute inset-0 m-auto"></div>
            <div className="w-20 h-20 border-4 border-t-gray-800 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin absolute inset-0 m-auto duration-1000"></div>
          </div>

          <div className="flex-1 text-center flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-black mb-2">
              more server<br></br>coming soon
            </h2>
          </div>
        </div>
      </Card>
    </div>
  );
}
