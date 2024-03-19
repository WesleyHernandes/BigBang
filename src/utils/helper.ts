export function convertToBrl(value: number | string): string {
  return Number(value).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}
