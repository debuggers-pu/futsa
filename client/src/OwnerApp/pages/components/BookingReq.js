import { ImLocation } from "react-icons/im";
import { IoTimeSharp } from "react-icons/io5";
import moment from "moment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBookingStatus } from "../../../axios";

const BookingReq = ({
  id,
  fullName,
  image,
  phoneNumber,
  bookedTime,
  bookingTime,
  bookingDate,
  address,
  isReq,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const onConfirm = async (e) => {
    e.preventDefault();
    const res = await updateBookingStatus({ bookId: id, status: "booked" });
    console.log(res.message);
    if (res) {
      toast.success(res.data.message);
    }
  };
  const onCancel = () => {};

  return (
    <div className="border-[1px] rounded-md shadow-sm mx-6 mt-4 px-2 py-2 hover:shadow-lg">
      <div className="flex items-center justify-between text-sm">
        <div className="bg-yellow-200 p-2 text-sm font-bold">
          Requested time :{" "}
          <span className="font-light">
            {moment(bookedTime).format("dddd, MMMM Do, h:mm a")}
            <p className="text-xs">id : {id}</p>
          </span>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <img
            src={`${process.env.REACT_APP_URL}/${image}`}
            alt="Userprofile"
            className="h-12 rounded-full"
          />

          <div>
            <h1 className="font-bold">{fullName}</h1>
            <p className="opacity-80 font-bold text-xs">+977 {phoneNumber}</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="flex items-center font-bold opacity-60">
            <ImLocation className="mr-2" />
            {address}
          </p>
          <p className="flex justify-center items-center font-bold opacity-60">
            <IoTimeSharp className="mr-2" /> {bookingTime} ({bookingDate})
          </p>
        </div>
        {isReq ? (
          <div className="flex space-x-4">
            <button className="seleected hover:opacity-80" onClick={onConfirm}>
              Confirm
            </button>
            <button className="unseleected hover:opacity-80" onClick={onCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="bg-green-200 p-2 text-sm font-bold ">
            Confirmed time :{" "}
            <span className=" font-light">
              {moment(updatedAt).format("dddd, MMMM Do, h:mm a")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookingReq;
