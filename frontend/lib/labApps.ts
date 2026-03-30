import { wordCountMeta } from "@/app/lab/word-count/meta";
import type { LabApp } from "@/lib/lab/types";

export type { LabApp, LabStatus } from "@/lib/lab/types";

export const labApps: LabApp[] = [wordCountMeta];
