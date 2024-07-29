import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Editpop({ props, name, password, keyed, role }) {
  const [newUsername, setNewUsername] = useState(name);
  const [newPassword, setNewPassword] = useState(password);
  const [newRole, setNewRole] = useState(role);
  const [status, setStatus] = useState(null);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/v1/updateUser/${keyed}`, {
        username: newUsername,
        password: newPassword,
        role: newRole,
      });

      console.log('Response from server:', response.data);
      //   triggerFetchData();

      // Set success status
      if(response){

          setStatus({ type: "success", message: "Successfully updated!" });
        //   props.triggerFetchData();
        }

      // You can close the popup or perform other actions here
    } catch (error) {
      // setRefesh(false);
      console.error('Error updating user:', error.response ? error.response.data : error.message);

      // Set error status
      setStatus({ type: "error", message: "Failed to update user. Please try again." });
    }
  };

  const handleAlertClose = () => {
    setStatus(null);
  };

  return (
    <div className="editpop">
      <Popup trigger={<button className="add__btn">EDIT USER</button>} position="bottom center" modal>
        {(close) => (
          <div className="popp__container">
            <div className="popp__box">
              <div className="popp__logo">
                <h1>Edit User</h1>
                <br />
              </div>
              <div className="boxlist">
                <div className="popp__inputname flex__row">
                  Username:
                  <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                </div>
                <div className="popp__inputname flex__row">
                  Password:
                  <input type="text" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="popp__inputname flex__row">
                  Role:
                  <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                    <option value="admin">admin</option>
                    <option value="normal">normal</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <button className="popp__box__button__discard" onClick={close}>
                Discard
              </button>
              <button className="popp__box__button" onClick={() => { handleSaveChanges() }}>
                SAVE
              </button>
            </div>
          </div>
        )}
      </Popup>

      <Stack sx={{ width: "100%" }} spacing={2}>
        {status && (
          <Alert onClose={handleAlertClose} severity={status.type}>
            {status.message}
          </Alert>
        )}
      </Stack>
    </div>
  );
}
