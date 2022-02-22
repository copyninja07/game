/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable quotes */
import React from "react";

const GameTC = () => {
  return (
    <div>
      <div id="my-table_wrapper" className="dataTables_wrapper no-footer">
        <table
          className="table table-data table table-hover dataTable no-footer"
          id="my-table"
          role="grid"
          aria-describedby="my-table_info"
        >
          <thead>
            <tr role="row">
              <th
                className="sorting_asc"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="ID: activate to sort column descending"
                style={{ width: "82.28px" }}
                aria-sort="ascending"
              >
                ID
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="Date: activate to sort column ascending"
                style={{ width: "150px" }}
              >
                Name
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="Customer Name: activate to sort column ascending"
                style={{ width: "120px" }}
              >
                Mobile no.
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="Price: activate to sort column ascending"
                style={{ width: "108px" }}
              >
                Nickname
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="Tax: activate to sort column ascending"
                style={{ width: "66px" }}
              >
                Password
              </th>{" "}
              <th
                className="sorting"
                tabindex="0"
                aria-controls="my-table"
                rowspan="1"
                colspan="1"
                aria-label="Status: activate to sort column ascending"
                style={{ width: "182px" }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">3605</td>
              <td>Praveen</td>
              <td className="">4567894566</td>
              <td>perry</td>
              <td>praveen@124</td>

              <td>
                <span className="badge badge-success">Enabled</span>
              </td>
            </tr>

            <tr role="row" className="odd">
              <td className="sorting_1">9605</td>
              <td>veen</td>
              <td className="">4567866</td>
              <td>pokjerry</td>
              <td>aveen@124</td>

              <td>
                <span className="badge badge-disabled">Disabled</span>
              </td>
            </tr>
          </tbody>
        </table>{" "}
      </div>
    </div>
  );
};

export default GameTC;
