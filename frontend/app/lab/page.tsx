import { labApps } from "@/lib/labApps";
import LabCard from "@/components/lab/LabCard";

export default function LabPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Lab</h1>
      {labApps.length === 0 ? (
        <p className="text-gray-500">No lab apps available yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labApps.map((app) => (
            <LabCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </main>
  );
}
