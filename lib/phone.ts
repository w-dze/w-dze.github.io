/** US-centric: strips formatting, prefixes +1 when 10 digits. */
export function telHref(phone: string): string | undefined {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = `1${digits}`;
  if (!digits.length) return undefined;
  return `tel:+${digits}`;
}
