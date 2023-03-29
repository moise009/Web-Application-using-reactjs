

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter filename..."
          name="fileName"
          value={editFormData.fileName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="link"
          required="required"
          placeholder="Enter a filelink..."
          name="fileLink"
          value={editFormData.fileLink}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="filetype"
          required="required"
          placeholder="Enter filetype..."
          name="filetype"
          value={editFormData.filetype}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;