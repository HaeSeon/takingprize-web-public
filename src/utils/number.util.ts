export function isNumeric(data: string | null | undefined): boolean {
  if (!data) return false
  return !isNaN(Number(data));
}