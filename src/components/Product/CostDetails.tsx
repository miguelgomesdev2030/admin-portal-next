import React from "react";
import DropZoneCommon from "@/Common/DropZoneCommon";

const CostDetails = () => {
  return (
    <div className="card-body">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Default City
          </a>
        </li>
      </ul>
      <form className="theme-form mega-form">
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Rail Tickets</strong>
          </label>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label className="form-label-title">
                Client Train Ticket (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label-title">
                Swiss Half Fare Travel Pass (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label-title">
              Total Rail Ticket Cost (CHF)
            </label>
            <input
              type="number"
              min={0}
              placeholder="Calculated automatically"
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Mountain Tickets</strong>
          </label>
          <div className="row g-3 mb-3">
            <div className="col-sm-4">
              <label className="form-label-title">
                Mountain Ticket 1 (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label-title">
                Mountain Ticket 2 (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label-title">Boat Ticket (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label-title">
              Total Mountain Ticket (CHF)
            </label>
            <input
              type="number"
              min={0}
              placeholder="Calculated automatically"
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Tasting</strong>
          </label>
          <div className="row g-3 mb-3">
            <div className="col-sm-4">
              <label className="form-label-title">Tasting 1 (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label-title">Tasting 2 (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label-title">Tasting 3 (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label-title">Total Tasting Cost (CHF)</label>
            <input
              type="number"
              min={0}
              placeholder="Calculated automatically"
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Guide & Transportation</strong>
          </label>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label className="form-label-title">
                Guide Train Ticket (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label-title">Transportation (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label-title">
              Total Guide & Transportation Cost (CHF)
            </label>
            <input
              type="number"
              min={0}
              placeholder="Calculated automatically"
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Final Totals</strong>
          </label>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label className="form-label-title">
                Total Individual Cost (CHF)
              </label>
              <input
                type="number"
                min={0}
                placeholder="Calculated automatically"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label-title">Total Bulk Cost (CHF)</label>
              <input
                type="number"
                min={0}
                placeholder="Calculated automatically"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title mt-3">
            <strong>Children Cost</strong>
          </label>
          <div className="mb-3">
            <label className="form-label-title">Children Cost (CHF)</label>
            <input
              type="number"
              min={0}
              placeholder="Calculated automatically"
              className="form-control"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CostDetails;
