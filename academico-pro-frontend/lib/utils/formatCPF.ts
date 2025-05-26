export function formatCPF(value: string) {
  const numeric = value.replace(/\D/g, "").slice(0, 11);

  return numeric
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}
