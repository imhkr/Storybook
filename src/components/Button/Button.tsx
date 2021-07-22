import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { FC, memo } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: "Primary" | "Info" | "Success" | "Warning" | "Danger" | "Secondary" | "Dark";
    children: string;
    className?: string;
    border?: "default" | "rounded";
    appearance?: "solid" | "outline";
}

const Button: React.FC<Props> = ({ children, className, theme, appearance, border, ...rest }) => {

    let appearanceClasses = "";
    let themeClasses = "";
    if (theme == "Primary") {
        themeClasses = " bg-blue-700 text-white hover:bg-blue-800";
        if (appearance == "outline") {
            appearanceClasses = "border border-blue-500 text-white-500 hover:text-white hover:bg-blue-700 hover:border-none shadow-lg";
        }
    }
    if (theme == "Info") {
        themeClasses = " bg-SkyBlue-100 text-white hover:bg-blue-700";
        if (appearance == "outline") {
            appearanceClasses = " border  border-SkyBlue-100 text-Skyblue-200 hover:text-white hover:bg-SkyBlue-200 hover:border-none shadow-lg";
        }
    } if (theme == "Success") {
        themeClasses = " bg-green-500 text-white hover:bg-green-700";
        if (appearance == "outline") {
            appearanceClasses = " border  border-green-500 text-green-500 hover:text-white hover:bg-green-500 hover:border-none shadow-lg";
        }
    } if (theme == "Warning") {
        themeClasses = " bg-yellow-500 text-white hover:bg-yellow-700";
        appearanceClasses = " border  border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-none shadow-lg";

    } if (theme == "Danger") {
        themeClasses = " bg-red-500 text-white hover:bg-red-600";
        appearanceClasses = " border  border-red-500 text-red-500 hover:text-white hover:bg-red-500 hover:border-none shadow-lg";

    } if (theme == "Secondary") {
        themeClasses = " bg-purple-600 text-white hover:bg-purple-700";
        appearanceClasses = " border  border-purple-600 text-purple-500 hover:text-white hover:bg-purple-600 hover:border-none shadow-lg";

    } if (theme == "Dark") {
        themeClasses = " bg-gray-700 text-white hover:bg-gray-800";
        appearanceClasses = " border  border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 hover:border-none shadow-lg";

    }
    let bodertype =
        border == "default" ? "rounded-md" : "rounded-full";
    return (
        <div >

            {appearance == "solid" ?
                <button className={"h-10 px-5 m-2 transition-colors duration-150  rounded-md shadow-2xl focus:shadow-outline " + themeClasses + " " + bodertype} >{children}</button>
                : <button className={"h-10 px-5 m-2 transition-colors duration-150  rounded-md shadow-2xl focus:shadow-outline " + appearanceClasses + " " + bodertype} >{children}</button>
            }
        </div>
    );
};

Button.defaultProps = {
    theme: "Primary",
    children: "Primary",
};

export default memo(Button);