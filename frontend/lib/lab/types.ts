export type LabStatus = "running" | "stopped" | "error";

export interface LabApp {
  id: string;
  name: string;
  description: string;
  status: LabStatus;
  url?: string;
}
