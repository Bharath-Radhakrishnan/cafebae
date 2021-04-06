import Moment from "moment";

const FormatDate = (date) => {
  return Moment(date).format("DD-MM-YYYY");
};
export default FormatDate;
