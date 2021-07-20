import { FC, memo, ReactNode } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";


interface Props { }

const Progress: React.FC<Props> = (props) => {

    return (
        <div >
            <ProgressBar progressPercentage={0} />
        </div>
    );
};

Progress.defaultProps = {
    children: "",
};

export default memo(Progress);