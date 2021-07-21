import { FC, memo, ReactNode } from "react";


interface Props {
    people: string[];
    UserExtra: number;
}

const StackAvatar: React.FC<Props> = ({ people, UserExtra }) => {
    return (
        <div className="m-10 flex">
            <img src={people[0]} alt="" className="w-14 h-14 rounded-full border-20 border-white -ml-4" />
            <img src={people[1]} alt="" className="w-14 h-14 rounded-full border-20 border-white -ml-4" />
            <img src={people[2]} alt="" className="w-14 h-14 rounded-full border-20 border-white -ml-4" />
            <img src={people[3]} alt="" className="w-14 h-14 rounded-full border-20 border-white -ml-4" />
            {UserExtra ? (
                <span className=" mt-3 text-blue-600  font-semibold w-20 h-8 text-md rounded-full bg-gray-100 border-4 border-white -ml-4">+{UserExtra} more</span>
            ) : ""
            }
        </div>
    );
};

StackAvatar.defaultProps = {
    people: ["https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
        "https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg",
        "https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg",
        "https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg",
    ],
};

export default memo(StackAvatar);