import React from "react";

const ReadOnlyRow = ({ contact, handleShowClick, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.fileName}</td>
      <td>{contact.fileLink}</td>
      <td>{contact.filetype}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;