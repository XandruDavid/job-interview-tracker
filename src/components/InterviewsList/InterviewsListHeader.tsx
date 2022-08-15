import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faCode, faEuro, faUsers } from "@fortawesome/free-solid-svg-icons";

export const InterviewsListHeader = () => (
    <div className="flex my-1 px-3 py-1 text-sm text-slate-300">
        <div className="inline-block w-36 font-medium uppercase">Status</div>

        <div className="flex-1 inline-block w-72 font-medium uppercase">Company</div>
        <div className="inline-block w-28">
            <FontAwesomeIcon icon={faUsers} />
        </div>

        <div className="flex-1 inline-block w-24 font-medium uppercase">Job</div>
        <div className="flex-1 inline-block w-44">
            <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="inline-block w-44">
            <FontAwesomeIcon icon={faCity} />
        </div>
        <div className="inline-block w-28">
            <FontAwesomeIcon icon={faEuro} />
        </div>
        <div className="inline-block w-12"></div>
    </div>
);
