import { useParams } from "react-router-dom";

import useDataDetch from "../hooks/useData";
import { MessageMetadata } from "../types";
import { FOLDERS_PATH } from './../Consts';




export default function Folder() {

    const { folderName } = useParams() as {
        folderName: string;
    }

    const URL = `${FOLDERS_PATH}/${folderName}`

    const { data, isLoading, isError } = useDataDetch<MessageMetadata[]>(URL)

    if (isLoading) return <div>loading...</div>
    if (isError) return <div>Error: failed to load messages for folder: {folderName}</div>

    // console.log("Folder", data)

    return (
        <div>
            <div className="folderHeader" title={folderName}>{folderName}</div>

            {data && data.map(messageMetadata =>
                <div className="messageRow" key={messageMetadata["message-id"]}>
                    <div className="messageColumn from">{messageMetadata.from}</div>
                    <div className="messageColumn">{messageMetadata.subject}</div>
                </div>)}

        </div>
    )
}