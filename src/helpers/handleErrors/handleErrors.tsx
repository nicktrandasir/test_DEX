import React from "react";
import swal from "@sweetalert/with-react";

export const HandleErrors = (error: any) => {
    const message = error?.message;
    const errorText = "Request failed with status code "
    return (
        <>
            {swal({
                content: (
                    <div className={"forSweetAlert"}>
                        {message === errorText + "400"
                            ? "Bad request!"
                            : message === errorText + "401"
                                ? " User with the specified username / password was not found."
                                : message === errorText + "409"
                                    ? "This name already exists!"
                                    : message === errorText + "500"
                                        ? "You must remove all players before removing a team!"
                                        : ""}
                    </div>
                ),
                timer: 2500,
                buttons: false,
                className: "warningAlert",
            })}
        </>
    );
};
