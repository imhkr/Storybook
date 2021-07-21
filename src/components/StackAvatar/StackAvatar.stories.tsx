import StackAvatar from "./StackAvatar";
import "../../index.css"
interface props {

}
const xyz = {
    title: "StackAvatar",
    component: StackAvatar
}
export const main = (args: any) => <StackAvatar{...args} ></StackAvatar>

main.args = {
}

export default xyz;
