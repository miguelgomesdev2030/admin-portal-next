import { userData } from "@/data/Users";
import { availableToursData } from "@/data/Tours";
import { ImagePath } from "@/utils/Constant";
import Image from "next/image";
import { Href } from "../../utils/Constant";
import { viewBookingsData } from "@/data/ViewBookings";

const ViewBooking = () => {
  return (
    <table className="user-table table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Tour</th>
          <th>Tour Date</th>
          <th colSpan={3}>Action</th>
        </tr>
      </thead>
      <tbody>
        {viewBookingsData.map((data, index) => (
          <tr key={index}>
            <td>
              <span>{data.name}</span>
            </td>
            <td>{data.surname}</td>
            <td>{data.email}</td>
            <td>{data.tour}</td>
            <td>{data.tour_date}</td>
            <td>
              <a href={Href}>
                <i className="fa fa-eye" />
              </a>
            </td>
            <td>
              <a href={Href}>
                <i className="fa fa-pencil-square-o" />
              </a>
            </td>
            <td>
              <a href={Href}>
                <i className="fa fa-trash-o" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewBooking;
