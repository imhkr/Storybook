import AvatarInfo from "./AvatarInfo";
import "../../index.css"
import { Children } from "react";
interface props {

}
const xyz = {
    title: "Avatar",
    component: AvatarInfo
}
export const main = (args: any) => <AvatarInfo{...args} ></AvatarInfo>

main.args = {
    online: undefined,
}

export default xyz;
