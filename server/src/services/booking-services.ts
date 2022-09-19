class BookingService {
  addBooking = async (data: any) => {
    try {
      return await data.save();
    } catch (error) {
      console.log(error);
    }
  };
}
export default new BookingService();
