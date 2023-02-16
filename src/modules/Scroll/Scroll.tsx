export const ScrollCenter = (element: string) => {
  const el = document.getElementById(element);
  el?.scrollIntoView({ behavior: "smooth", block: "center" });
};
export const ScrollTop = (element: string) => {
  const el = document.getElementById(element);
  el?.scrollIntoView({ behavior: "smooth" });
};
