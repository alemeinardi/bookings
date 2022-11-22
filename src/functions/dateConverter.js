export function StringToDate(date) {
  if (date && typeof date === "string") {
    const parts = date.split("-");

    return new Date(Date.UTC(parts[0], parts[1]-1, parts[2], 3, 0, 0));
  }
  else { return date };
}

export function DateToString(string) {

  if (string) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const date = StringToDate(string);

    return date.toLocaleDateString('es-AR',dateOptions);
  }
  else { return string };
}