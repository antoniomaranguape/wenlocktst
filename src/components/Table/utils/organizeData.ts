import type { ITableHeader } from "../types";

type IndexedHeader = Record<string, ITableHeader>;

type OrganizedItem = Record<string, unknown> & { $original?: unknown };

export function organizeData<T extends object>(
  data: T[],
  headers: ITableHeader[]
): [OrganizedItem[], IndexedHeader] {
  const indexedHeader: IndexedHeader = {};

  headers.forEach((header) => {
    indexedHeader[header.key] = { ...header };
  });

  const headerKeysInOrder = headers.map((h) => h.key);

  const organizedData = (data ?? []).map((item) => {
    const organizedItem: OrganizedItem = {};
    const record = item as Record<string, unknown>;

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = record[key];
    });

    organizedItem.$original = item;
    return organizedItem;
  });

  return [organizedData, indexedHeader];
}
