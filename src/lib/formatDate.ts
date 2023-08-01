export const formatDate = (date: Date) => {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(d);
};
