import { SplineSceneBasic } from "@/components/demos/demo";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            3D Spline Integration Demo
          </h1>
          <p className="text-neutral-400">
            Interactive 3D scenes powered by Spline, Next.js, and Tailwind CSS
          </p>
        </div>
        
        <SplineSceneBasic />
      </div>
    </main>
  );
}
