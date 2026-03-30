import type { LabApp } from "@/lib/lab/types";

interface LabCardProps {
  app: LabApp;
}

export default function LabCard({ app }: LabCardProps) {
  const statusColor: Record<string, string> = {
    running: "bg-green-100 text-green-800",
    stopped: "bg-gray-100 text-gray-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-xl font-semibold">{app.name}</h2>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusColor[app.status] ?? "bg-gray-100 text-gray-800"}`}
        >
          {app.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{app.description}</p>
      {app.url && (
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          Open App
        </a>
      )}
    </div>
  );
}
