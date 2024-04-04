function DateFormate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const day = formattedDate.split(" ")[0];
  const month = formattedDate.split(" ")[1];
  const dateOfMonth = formattedDate.split(" ")[2];
  const year = formattedDate.split(" ")[3];
  return (
    <p className="font-medium flex space-x-1 text-dark-3 text-xl">
      <span className="font-semibold text-dark-2">{day}</span>
      <span>{month}</span>
      <span>{dateOfMonth}</span>
      <span>{year}</span>
    </p>
  );
}

export default DateFormate;
