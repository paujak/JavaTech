import React from "react";

export const ChangeUserComponent = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">
          Enter user name:
          <input type="text" name="userName" className="form-control" />
        </label>
        <button type="submit" className="btn btn-primary mx-2">
          Change
        </button>
      </div>
    </form>
  );
};

export default ChangeUserComponent;
