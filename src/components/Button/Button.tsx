import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { FC, memo } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: "Primary" | "Info" | "Success" | "Warning" | "Danger" | "Secondary" | "Dark";
    children: string;
    className?: string;
}

const Button: React.FC<Props> = ({ children, className, theme, ...rest }) => {

    let themeClasses = "";
    if (theme == "Primary") {
        themeClasses = " bg-blue-700 text-white hover:bg-blue-800";
    }
    if (theme == "Info") {
        themeClasses = " bg-blue-600 text-white hover:bg-blue-700";
    } if (theme == "Success") {
        themeClasses = " bg-green-500 text-white hover:bg-green-700";
    } if (theme == "Warning") {
        themeClasses = " bg-yellow-500 text-white hover:bg-yellow-700";
    } if (theme == "Danger") {
        themeClasses = " bg-red-500 text-white hover:bg-red-600";
    } if (theme == "Secondary") {
        themeClasses = " bg-purple-600 text-white hover:bg-purple-700";
    } if (theme == "Dark") {
        themeClasses = " bg-gray-700 text-white hover:bg-gray-800";
    }
    return (
        <div >
            <button className={"h-10 px-5 m-2 transition-colors duration-150  rounded-md shadow-2xl focus:shadow-outline " + themeClasses} >{children}</button>
        </div>
    );
};

Button.defaultProps = {
    theme: "Primary",
    children: "Primary",
};

export default memo(Button);