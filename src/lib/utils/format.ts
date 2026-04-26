export function formatCurrency(amountInCents: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amountInCents / 100);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatRelative(date: Date | string): string {
  const rtf = new Intl.RelativeTimeFormat("id", { numeric: "auto" });
  const diffMs = new Date(date).getTime() - Date.now();
  const diffDays = Math.round(diffMs / 86_400_000);
  if (Math.abs(diffDays) < 1) return "hari ini";
  return rtf.format(diffDays, "day");
}
