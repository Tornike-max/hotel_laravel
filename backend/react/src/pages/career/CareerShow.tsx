import { Key } from "react";
import { useGetCareer } from "../../hooks/useGetCareer";
import { formatDate } from "../../ui/formatDate";
import NavLink from "../../ui/NavLink";

const CareerShow = () => {
    const { data, isPending } = useGetCareer();

    if (isPending) return <p>Loading...</p>;
    return (
        <div className="w-full flex justify-center items-center flex-col gap-2">
            <h2 className="w-full text-start text:xl sm:text-2xl font-semibold">
                {data?.title}
            </h2>

            <div className="w-full flex justify-start items-center gap-2">
                <NavLink path={"/"} label={"ყველა ვაკანსია"} />
                <span>|</span>
                <NavLink
                    path={`/company/${data?.company.id}`}
                    label={"ამ ორგანიზაციის ყველა ვაკანსია"}
                />
            </div>

            <div className="w-full flex justify-center items-center flex-col mt-4 gap-2 bg-gray-200 rounded-md px-4 py-3">
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50">
                    <p>დასახელება:</p>
                    <span className="font-semibold">{data?.title}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50">
                    <p>მომწოდებელი:</p>
                    <span className="font-semibold">{data?.company?.name}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50 ">
                    <p>გამოქვეყნდა:</p>
                    <span className="font-semibold">
                        {formatDate(data?.created_at)}
                    </span>
                </div>
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50">
                    <p>უნარები:</p>
                    {data?.skills?.map((skill: { name: string; id: Key }) => (
                        <span
                            key={skill.id}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-start items-center mt-8 bg-gray-200 rounded-md px-4 py-3">
                <p className="text-sm sm:text-base">{data.description}</p>
            </div>

            <div className="w-full flex justify-start items-center gap-2 mt-4">
                <NavLink path={"/"} label={"ყველა ვაკანსია"} />
                <span>|</span>
                <NavLink path={"/"} label={"ამ ორგანიზაციის ყველა ვაკანსია"} />
            </div>
        </div>
    );
};

export default CareerShow;
