import type { Metadata } from "next";
import LabCard from "@/components/lab/LabCard";
import { labApps } from "@/lib/labApps";
import { PageContainer, PageLead, PageTitle } from "@/components/ui/Page";

export const metadata: Metadata = {
  title: "Lab",
  description: "Small tools and experiments.",
};

export default function LabPage() {
  return (
    <PageContainer>
      <PageTitle>Lab</PageTitle>
      <PageLead>
        Small tools and experiments — some useful, others just figuring things
        out. Each one is self-contained.
      </PageLead>

      <div className="mt-8 space-y-3">
        {labApps.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No experiments yet. Add one to{" "}
            <code className="font-mono">lib/labApps.ts</code>.
          </p>
        ) : (
          labApps.map((app) => <LabCard key={app.href} app={app} />)
        )}
      </div>
    </PageContainer>
  );
}
