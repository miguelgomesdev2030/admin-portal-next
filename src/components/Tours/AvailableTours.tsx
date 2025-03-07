import { useEffect, useState } from "react";
import { userData } from "@/data/Users";
import { availableToursData } from "@/data/Tours";
import { ImagePath } from "@/utils/Constant";
import Image from "next/image";
import { Href } from "../../utils/Constant";
import { toast } from "react-toastify";
import Link from "next/link";
import { TourRow } from "@/store/tours";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/Dashboard/WorldMap"), {
  ssr: false,
});

interface AvailableToursProps {
  tourRows: TourRow[];
  // updateTour: Function;
  deleteTour: Function;
}

const AvailableTours: React.FC<AvailableToursProps> = ({
  tourRows,
  // updateTour,
  deleteTour,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({} as TourRow);
  const toggleModal = () => setModalOpen(!modalOpen);
  const openModal = (data: TourRow) => {
    const result = {
      ...data,
      time_slots: JSON.parse(data.time_slots).map((e: any) => ({
        start: e.specific_date,
        title: e.time,
      })),
    };
    setData(result);
    setModalOpen(true);
  };
  const events = [
    { title: "Tour Slot 1", start: "2025-03-10" },
    { title: "Tour Slot 2", start: "2025-03-15" },
  ];
  useEffect(() => {
    console.log(data);
  }, [data]);
  // console.log(tourRows);
  return (
    <>
      <table className="user-table table table-striped">
        <thead>
          <tr>
            <th></th>
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
              <td onClick={() => openModal(row)}>
                {row.image && (
                  <Image
                    src={`http://localhost:8080/uploads/${row.image}`}
                    width={50}
                    height={50}
                    alt={`${row.image}`}
                  />
                )}
              </td>
              <td onClick={() => openModal(row)}>
                <span>{row.name}</span>
              </td>
              <td onClick={() => openModal(row)}>{row.short_description}</td>
              <td onClick={() => openModal(row)}>{row.duration_hours}</td>
              <td onClick={() => openModal(row)}>{row.location}</td>
              <td onClick={() => openModal(row)}>{row.what_to_bring}</td>
              <td onClick={() => openModal(row)}>{row.know_before}</td>
              <td onClick={() => openModal(row)}>{row.questions}</td>
              <td>
                <Link href={`/tours/detail/${row.id}`}>
                  <i className="fa fa-eye" />
                </Link>
              </td>
              <td>
                <Link href={`/tours/update/${row.id}`}>
                  <i className="fa fa-pencil-square-o" />
                </Link>
              </td>
              <td>
                <Link href={""} onClick={() => deleteTour(row.id)}>
                  <i className="fa fa-trash-o" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>{"Trip for XXX"}</ModalHeader>
        <ModalBody>
          {data.image && (
            <Image
              src={`http://localhost:8080/uploads/${data.image}`}
              width={450}
              height={100}
              alt={`${data.image}`}
            />
          )}
          <WorldMap
            checkPlace={false}
            locationSet={{
              position: [48.8588897, 2.3200410217200766],
              locations: [
                [48.8833935003315, 2.2133947168014334],
                [48.88926332986482, 2.42378095500623],
                [48.85787431312154, 2.3318013272103104],
                [48.830308011367975, 2.2453130204768583],
                [48.845448760335266, 2.429958691201471],
              ],
            }}
          />
          <p>
            Name: <span>{data.name}</span>
          </p>
          <p>Description: {data.short_description}</p>
          <p>Duration_hours: {data.duration_hours}</p>
          <p>Location: {data.location}</p>
          <p>Bring: {data.what_to_bring}</p>
          <p>KnowBefore: {data.know_before}</p>
          <p>Questions: {data.questions}</p>
          <div style={{ marginTop: "20px" }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={data.time_slots}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleModal}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AvailableTours;
