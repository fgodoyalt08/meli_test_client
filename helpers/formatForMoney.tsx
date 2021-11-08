export default (value: number): string => {
  return new Number(value).toLocaleString("de-DE", { maximumFractionDigits: 2 });
};