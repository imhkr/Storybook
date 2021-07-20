import { FC, memo } from "react";


interface Props {
    online?: true | false | undefined;
}

const AvatarInfo: React.FC<Props> = ({ online }) => {
    let iconClasses = "";
    if (online == false) {
        iconClasses = " bg-gray-300 ";
    }
    else if (online == true) {
        iconClasses = " bg-green-600 ";
    }
    return (
        <div className="relative inline-block">
            <img className="inline object-cover  w-20 h-20 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
            <span className={"absolute bottom-0 right-4 inline-block w-5 h-5   border-2 border-white rounded-full" + iconClasses}></span>
        </div >
    );
};

AvatarInfo.defaultProps = {
    online: undefined,
};

export default memo(AvatarInfo);