import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">
      <div>1</div>

      <div className="lg:col-span-2">2</div>
      <div className="lg:col-span-2">3</div>
      <div>4</div>
      <div className="lg:col-span-2">5</div>
      <div>6</div>
    </div>
  );
}
