import { userData } from "@/data/Users";
import { availableToursData } from "@/data/Tours";
import { ImagePath } from "@/utils/Constant";
import Image from "next/image";
import { Href } from "../../utils/Constant";
import { toast } from "react-toastify";

interface TourRow {
  id: number;
  name: string;
  short_description: string;
  duration_hours: number;
  location: string;
  what_to_bring: string;
  know_before: string;
  questions: string;
}

interface AvailableToursProps {
  tourRows: TourRow[];
  deleteTour: Function;
}

const AvailableTours: React.FC<AvailableToursProps> = ({
  tourRows,
  deleteTour,
}) => {
  console.log(tourRows);
  return (
    <table className="user-table table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Short Description</th>
          <th>Duration</th>
          <th>Location</th>
          <th>What to Bring</th>
          <th>Know Before You Go</th>
          <th>Qeustions</th>
          <th colSpan={3}>Action</th>
        </tr>
      </thead>
      <tbody>
        {tourRows.map((row, index) => (
          <tr key={row.id}>
            <td>
              <span>{row.name}</span>
            </td>
            <td>{row.short_description}</td>
            <td>{row.duration_hours}</td>
            <td>{row.location}</td>
            <td>{row.what_to_bring}</td>
            <td>{row.know_before}</td>
            <td>{row.questions}</td>
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
              <a href={Href} onClick={deleteTour(row.id)}>
                <i className="fa fa-trash-o" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvailableTours;
