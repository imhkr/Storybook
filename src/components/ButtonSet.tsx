import { FC, memo } from "react";
import Button from "./Button/Button";



interface Props { }

const ButtonSet: React.FC<Props> = (props) => {

    return (
        <div >
            <Button theme="Primary" children="Hello" />
        </div>
    );
};

ButtonSet.defaultProps = {
    children: "",
};

export default memo(ButtonSet);