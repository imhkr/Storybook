import { FC, memo, ReactNode } from "react";


interface Props {
    progressPercentage: number;
}

const ProgressBar: React.FC<Props> = ({ progressPercentage }) => {

    let ProgressClass = "";
    if (progressPercentage >= 0 && progressPercentage < 30) {
        ProgressClass = " bg-blue-600 "
    }
    if (progressPercentage >= 30 && progressPercentage < 40) {
        ProgressClass = " bg-blue-400 "
    } if (progressPercentage >= 40 && progressPercentage < 50) {
        ProgressClass = " bg-green-500 "
    } if (progressPercentage >= 50 && progressPercentage < 60) {
        ProgressClass = " bg-yellow-600 "
    }
    if (progressPercentage >= 60 && progressPercentage < 70) {
        ProgressClass = " bg-red-600 "
    } if (progressPercentage >= 70 && progressPercentage < 80) {
        ProgressClass = " bg-purple-600 "
    }
    if (progressPercentage >= 80 && progressPercentage < 100) {
        ProgressClass = " bg-gray-800 "
    }
    if (progressPercentage > 100) {
        console.error((progressPercentage) + " Is Beyond 100")
        ProgressClass = " bg-gray-800 "
    }
    if (progressPercentage < 0) {
        console.error((progressPercentage) + " Is Below 100")
        ProgressClass = " bg-blue-600 "
    }
    return (



        <div className='m-4 h-4 w-1/2  bg-gray-300 rounded-lg'>
            <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full` + ProgressClass}>
            </div>
        </div>


    );
};

ProgressBar.defaultProps = {
    progressPercentage: 0,
};

export default memo(ProgressBar);