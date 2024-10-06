const getDayMonth = (input) => {
    const date = new Date(input);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
  
    return `${day} ${month}`;
}

export default getDayMonth;