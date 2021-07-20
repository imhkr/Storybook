import ProgressBar from "./ProgressBar";
import "../../index.css"
interface props {

}
const xyz = {
    title: "ProgressBar",
    component: ProgressBar
}
export const main = (args: any) => <ProgressBar{...args} ></ProgressBar>

main.args = {
    progressPercentage: 0,
}

export default xyz;
