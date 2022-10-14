import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import discussionContext from "../../contexts/discussion";
import Contact from "../basics/contact";

export default function Contacts() {
    const { discut, allMember } = useContext(discussionContext);

    return (
        <div className="contacts radius bloc_with_shaddow">
            <div className="first_block strongest">Recent</div>
            {allMember.length > 1 ? (
                allMember.map((cont, index) => (
                    <Contact
                        name={`${cont.firstName} ${cont.secondName}`}
                        message={
                            discut.length ? discut[discut.length - 1] : false
                        }
                        data={cont}
                        index={index}
                        array={allMember}
                        key={cont._id}
                    />
                ))
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}
