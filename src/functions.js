const getTTvalues = (tt) => {
  const mins = tt >= 60 ? tt % 60 : tt;
  const absoluteHours = parseInt(tt / 60);
  const hrs = absoluteHours >= 24 ? absoluteHours % 24 : absoluteHours;
  const days = parseInt(absoluteHours / 24);
  return { mins, hrs, days };
};

const getDurationString = (number, word) => {
  let output = `${number} ${word}`;
  if (!number.toString().endsWith("1")) output += "s";
  return output;
};

export const getTotalTimeToReadString = (tt, postsCount) => {
  const time = getTTvalues(tt);
  const intro = `Time to read entire blog (${getDurationString(
    postsCount,
    "post"
  )}): `;
  let value = "";
  if (time.days) {
    value += getDurationString(time.days, "day");
    if (time.hrs || time.mins) {
      value += " ";
    }
  }
  if (time.hrs) {
    value += getDurationString(time.hrs, "hour");
    if (time.mins) {
      value += " ";
    }
  }
  if (time.mins) value += getDurationString(time.mins, "minute");
  return { intro, value };
};
