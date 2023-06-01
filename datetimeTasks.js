const task4 = () => {
  const month_name = (date) => {
    switch (date.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };

  console.log(month_name(new Date("10/11/2009")));
  console.log(month_name(new Date("11/13/2014")));
};

const task5 = () => {
  const compare_dates = (date1, date2) => {
    if (date1 > date2) return "Date1 > Date2";
    else if (date1 < date2) return "Date2 > Date1";
    else return "Date1 = Date2";
  };

  console.log(
    compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
  );
  console.log(
    compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
  );
  console.log(
    compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
  );
};

const task7Datetime = () => {
  const is_weekend = (dateString) => {
    let date = new Date(dateString);
    if (date.getDay() === 0 || date.getDay() === 6) return "Weekend";
  };
  console.log(is_weekend("Nov 15, 2014"));
  console.log(is_weekend("Nov 16, 2014"));
  console.log(is_weekend("Nov 17, 2014"));
};

const task9 = () => {
  const lastday = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  };
  console.log(lastday(2014, 0));
  console.log(lastday(2014, 1));
  console.log(lastday(2014, 11));
};

const task13Datetime = () => {
  const timeConvert = (minutesTotal) => {
    let hours = Math.trunc(minutesTotal / 60);
    let minutes = minutesTotal - hours * 60;
    return `${minutesTotal} minutes = ${hours} hour(s) and ${minutes} minute(s)`;
  };
  console.log(timeConvert(200));
};
