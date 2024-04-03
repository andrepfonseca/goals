export function formatToNumber(text: string): number {
  const numeroFormatado = text
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".");
  const numero = parseFloat(numeroFormatado);
  return numero;
}
