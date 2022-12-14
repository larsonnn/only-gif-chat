import * as React from "react";
import { socketApi } from "../services/SocketAPI";
import Picker from "./Tenor/Picker";

type Props = {
    room: string;
}

const GifInput: React.FC<Props> = ({room}) => {
    return <>
        <Picker onClick={(url: string) => socketApi.sendGif(url, room)} />
    </>
}
export default GifInput;