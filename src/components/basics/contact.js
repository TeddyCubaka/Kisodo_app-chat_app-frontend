import React, { useContext } from "react";
import discussionContext from "../../contexts/discussion";

export default function Contact({ name, message, image, data, discussionId }) {
    const { setFreind, setActualDiscussion, setLoading, setMessages } =
        useContext(discussionContext);

    return (
        <div
            className="contact_card"
            onClick={() => {
                if (!data.membres) {
                    setFreind({
                        userId: data._id,
                        fullName: name,
                        image: data.image,
                        biography: data.biography,
                        discussionId: discussionId,
                    });
                    setMessages([]);
                    setLoading("loader");
                    setActualDiscussion({});
                } else {
                    setMessages([]);
                    setLoading("big_loader");
                    setActualDiscussion({
                        userId: data.membres[0]._id,
                        fullName: name,
                        image: data.image,
                        biography: data.biography,
                        discussionId: data._id,
                    });
                    setFreind({
                        userId: data.membres[0]._id,
                        fullName: name,
                        image: data.image,
                        biography: data.biography,
                        discussionId: data._id,
                    });
                }
            }}
        >
            <div className="margin_x-10 content_center img_card">
                {image ? (
                    <img src={image} alt="" />
                ) : (
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/circle-flats/170/contacts-512.png"
                        alt=""
                    />
                )}
            </div>
            <div className="contact_info">
                <div className="strong"> {name} </div>
                {message ? (
                    <div className="small">{message.message}</div>
                ) : (
                    <div className="small">No message here</div>
                )}
            </div>
        </div>
    );
}
