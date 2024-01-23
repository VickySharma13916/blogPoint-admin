import React from "react";
import moment from "moment";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
import { Card, Table } from "react-bootstrap";

import DropdownMenu from "../../components/DropdownMenu";
import { BACKEND_URL } from "../../services/constants";

const ViewProfile = ({ user }) => {
  const history = useHistory();

  const dropdownMenu = () => {
    const menu = [
      {
        label: "Edit Profile",
        onClick: () => history.push("/account/edit"),
      },
      {
        label: "Change Password",
        onClick: () => history.push("/account/change-password"),
      },
    ];

    return menu;
  };

  return (
    <Card
      border="light"
      className="w-100 mx-auto mt-5 px-4 px-lg-5 py-4 py-lg-5 position-relative profile"
    >
      <Avatar
        src={BACKEND_URL + user?.adminImage}
        name={`${user?.firstName} ${user?.lastName}`}
        size="150"
        className="ff-primary rounded-circle mx-auto"
      />
      <DropdownMenu
        menu={dropdownMenu()}
        style={{
          button: {
            position: "absolute",
            top: "16px",
            right: "16px",
          },
        }}
      />
      <Table borderless striped className="m-0 table--details" responsive="lg">
        <tbody>
          <tr>
            <th>Name</th>
            <td>:</td>
            <td>
              {user?.firstName} {user?.lastName}
            </td>
          </tr>
          <tr>
            <th>Role</th>
            <td>:</td>
            <td>
              {user?.role && user?.role.displayName
                ? user?.role.displayName
                : "Super Admin"}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>:</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <th>Mobile</th>
            <td>:</td>
            <td>{user?.mobileNumber ? `${user?.mobileNumber}` : "--"}</td>
          </tr>
          <tr>
            <th>Date Added</th>
            <td>:</td>
            <td>{moment(user?.createdAt).format("MMM Do YYYY, h:mm a")}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default ViewProfile;
