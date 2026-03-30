export type LabStatus = "live" | "building" | "idea";

/** "demo" = experiment built for this site; "site" = standalone product hosted here */
export type LabKind = "demo" | "site";

export type LabApp = {
  href: string;
  title: string;
  description: string;
  status: LabStatus;
  kind?: LabKind;
  showOnHome?: boolean;
};
