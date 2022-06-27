class BookingService {
  addBooking = async (data: any) => {
    return await data.save();
  };
}
export default new BookingService();
