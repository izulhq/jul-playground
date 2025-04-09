import { Card } from "@/components/ui/card";

export function ComingSoonCard() {
  return (
    <div className="w-[320px]">
      <Card className="bg-white/70 backdrop-blur-sm shadow-md border border-black/10 hover:border-black/50 hover:shadow-none transition-all overflow-hidden h-[320px] flex flex-col">
        <div className="p-8 flex flex-col items-center justify-center h-full">
          {/* Card content centered vertically and horizontally */}
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            {/* Loading animation icon - centered */}
            <div className="flex space-x-2">
              <div
                className="w-4 h-4 bg-gray-600 rounded-full animate-pulse"
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div
                className="w-4 h-4 bg-gray-600 rounded-full animate-pulse"
                style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-4 h-4 bg-gray-600 rounded-full animate-pulse"
                style={{ animationDuration: "1.5s", animationDelay: "1s" }}
              ></div>
            </div>

            {/* Text centered */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black">
                more server
                <br />
                coming soon
              </h2>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
