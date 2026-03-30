import { ButtonLink, PageContainer, PageTitle, PageLead } from "@/components/ui/Page";

export default function Home() {
  return (
    <PageContainer>
      <PageTitle>Personal Lab</PageTitle>
      <PageLead>
        An experimentation platform for building small tools and interactive
        demos.
      </PageLead>
      <div className="mt-6">
        <ButtonLink href="/lab" tone="primary">
          Browse the lab →
        </ButtonLink>
      </div>
    </PageContainer>
  );
}
