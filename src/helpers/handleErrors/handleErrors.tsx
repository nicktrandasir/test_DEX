import React from "react";
import swal from "@sweetalert/with-react";

export const HandleErrors = (error:  any) => {
  const message = error?.message;
  return (
    <>
      {swal({
        content: (
          <div className={"forSweetAlert"}>
            {message === "Request failed with status code 400"
              ? "Bad request!"
              : "" || message === "Request failed with status code 401"
              ? " User with the specified username / password was not found."
              : "" || message === "Request failed with status code 409"
              ? "This name already exists!"
              : "" || message === "Request failed with status code 500"
              ? "You must remove all players before removing a team!"
              : ""}
          </div>
        ),
        timer: 2500,
        buttons: false,
        className: "warningAlert"
      })}
    </>
  );
};
