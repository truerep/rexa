const getFormattedDate = (datetimeStr) => {
  const dt = new Date(datetimeStr);

  // Get date and time components
  const date = dt.getDate();
  const month = dt.toLocaleString('default', {month: 'short'});
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Format date and time
  const formattedDate = `${date} ${month}`;
  const formattedTime = `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;

  return `${formattedTime} on ${formattedDate}`;
};

export default getFormattedDate;
