import Button from "./Button";
import "../../index.css"
import { Children } from "react";
import { ButtonHTMLAttributes } from "react";
interface props {

}
const xyz = {
    title: "Button",
    component: Button
}
export const main = (args: any) => <Button{...args} ></Button>

main.args = {
    theme: "Primary",
    children: "Primary",
    type: "submit",
}

export default xyz;
