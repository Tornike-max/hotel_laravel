import { useGetCareer } from "../hooks/useGetCareer";
import { formatDate } from "../ui/formatDate";
import NavLink from "../ui/NavLink";

const CareerShow = () => {
    const { data, isPending } = useGetCareer();

    if (isPending) return <p>Loading...</p>;
    return (
        <div className="w-full flex justify-center items-center flex-col gap-2">
            <h2 className="w-full text-start text:xl sm:text-2xl font-semibold">
                {data.title}
            </h2>

            <div className="w-full flex justify-start items-center gap-2">
                <NavLink path={"/"} label={"ყველა ვაკანსია"} />
                <span>|</span>
                <NavLink path={"/"} label={"ამ ორგანიზაციის ყველა ვაკანსია"} />
            </div>

            <div className="w-full flex justify-center items-center flex-col mt-4 gap-2 bg-gray-200 rounded-md px-4 py-3">
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50">
                    <p>დასახელება:</p>
                    <span className="font-semibold">{data.title}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50">
                    <p>მომწოდებელი:</p>
                    <span className="font-semibold">{data.company.name}</span>
                </div>
                <div className="w-full flex items-center justify-start gap-2 border-b-[1px] py-1 border-gray-50 ">
                    <p>გამოქვეყნდა:</p>
                    <span className="font-semibold">
                        {formatDate(data.created_at)}
                    </span>
                </div>
            </div>

            <div className="w-full flex justify-start items-center mt-8 bg-gray-200 rounded-md px-4 py-3">
                <p className="text-sm sm:text-base">
                    სს "არდი დაზღვევა" აცხადებს ვაკანსიას უფროსი შიდა აუდიტორის
                    პოზიციაზე, შიდა აუდიტის სამსახურში. სამუშაო ადგილი: ქ.
                    თბილისი, ზ. ანჯაფარიძის N1 სამუშაო საათები:
                    ორშაბათი-პარასკევი 10:00-18:00. ანაზღაურება: შეთანხმებით,
                    გამოცდილების და კვალიფიკაციის შესაბამისად პოზიციის ზოგადი
                    აღწერა: პოზიცია გულისხმობს კომპანიაში არსებული შიდა
                    პროცესების, პროცედურების და ბიზნეს გარემოს შესწავლას და
                    შეფასებას მათი გაუმჯობესების მიზნით. ასევე, თავისი
                    საქმიანობით, ორგანიზაციული მიზნების მიღწევაში
                    კომპანიის/მენეჯმენტის მხარდაჭერას. აღნიშნული პოზიცია
                    მოიაზრებს სხვადასხვა ბიზნეს ერთეულებთან ინტენსიურ და აქტიურ
                    კომუნიკაციას, მათ მხარეს არსებულ ბიზნეს პროცესებში როგორც
                    კონტროლის გარემოს გაუმჯობესების, ასევე გაცემული
                    რეკომენდაციების შესრულების მონიტორინგის მიზნით.
                </p>
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
