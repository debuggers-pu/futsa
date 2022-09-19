import TimeSlots from "../../../dummuydata/timeslots.json";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBookModal } from "../../../redux/slices/modalSlice";
import {
  setBookingSelectedTime,
  setBookDate,
  setUserId,
  setFutsalId,
  setFutsalDetails,
} from "../../../redux/slices/bookingSlice";

const available =
  "bg-secondaryDark text-white cursor-pointer opacity-100 hover:opacity-80";
const pending = "bg-yellow-400 text-white cursor-pointer opacity-80";
const booked = "bg-green-500 text-white cursor-pointer opacity-80";

const TabContent = ({ selectedDate, futsalData }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userid = useSelector((state) => state.auth.user.details._id);
  function onClickHandler(item, selectedDate, e) {
    e.preventDefault();
    dispatch(setBookModal());
    dispatch(setBookingSelectedTime(item.time));
    dispatch(setBookDate(selectedDate));
    dispatch(setFutsalId(id));
    dispatch(setUserId(userid));
    dispatch(setFutsalDetails(futsalData));
  }
  return (
    <div className="mx-10 mt-4">
      <h1 className="font-bold text-xl text-center">
        Available slots for {selectedDate}, 2022
      </h1>
      <p className="text-center">Please choose an available time </p>
      <div className="mt-2">
        <div className="flex item-center justify-center space-x-3">
          <div className="bg-secondaryDark text-white text-xs px-3 py-1 font-bold rounded-sm">
            Available
          </div>
          <div className="bg-green-500 text-white text-xs px-3 py-1 font-bold rounded-sm">
            Booked
          </div>
          <div className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-sm">
            Pending
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-4">
        {TimeSlots[0].timeSlots.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                item.available ? available : item.booked ? booked : pending
              }  px-6 py-6 rounded-md text-white cursor-pointer`}
              onClick={(e) => {
                if (item.available) {
                  onClickHandler(item, selectedDate, e);
                }
              }}
            >
              <p className="text-xl font-bold">{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TabContent;
