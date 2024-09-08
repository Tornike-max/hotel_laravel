import { Link } from "react-router-dom";
import {
    discountPrices,
    vacancyPrices,
    vipVacancyPrices,
} from "../../constants/constants";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { FaSquareFacebook } from "react-icons/fa6";

const CareerShowRatesPage = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full flex justify-center items-start flex-col gap-4">
                <h4 className="text-blue-500 text-lg">
                    სტანდარტული განცხადება
                </h4>
                <div className="text-base text-gray-600 w-full flex justify-center items-start flex-col gap-2">
                    {vacancyPrices.map((vacancy) => (
                        <p key={vacancy.price}>
                            {vacancy.range} ვაკანსია ერთ განცხადებაში:{" "}
                            {vacancy.price} ლარი
                        </p>
                    ))}
                    <p className="mt-2">
                        ლოგოტიპი - განცხადებასთან ერთად ლოგოტიპის დამატების
                        შემთხვევაში, საფასურს ემატება 20 ლარი თითო განცხადებაზე.
                        უცხო ენა - თუ განცხადება 2 ან 3 ენაზე ქვეყნდება,
                        საფასურს ემატება 10 ლარი თითო ენაზე.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-4 mt-8">
                <h4 className="text-blue-500 text-lg">ვიპ განცხადება</h4>
                <div className="text-base text-gray-600 w-full flex justify-center items-start flex-col gap-2">
                    {vipVacancyPrices.map((vacancy) => (
                        <p key={vacancy.price}>
                            {vacancy.range} ვაკანსია ერთ განცხადებაში:
                            {vacancy.price} ლარი
                        </p>
                    ))}
                    <p className="mt-2">
                        ლოგოტიპი - განცხადებასთან ერთად ლოგოტიპის დამატების
                        შემთხვევაში, საფასურს ემატება 20 ლარი თითო განცხადებაზე.
                        უცხო ენა - თუ განცხადება 2 ან 3 ენაზე ქვეყნდება,
                        საფასურს ემატება 10 ლარი თითო ენაზე.
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center items-start flex-col gap-4 mt-8">
                <h4 className="text-blue-500 text-lg">ფასდაკლებები</h4>
                <p>
                    განცხადების განმეორებით განთავსებაზე/განახლებაზე მოქმედებს
                    შემდეგი ტარიფები:
                </p>
                <div className="text-base text-gray-600 w-full flex justify-center items-start flex-col gap-2">
                    {discountPrices.map((vacancy) => (
                        <p key={vacancy.price}>
                            {vacancy.range} ვაკანსია ერთ განცხადებაში:
                            {vacancy.price} ლარი
                        </p>
                    ))}
                    <p className="mt-2">
                        ლოგოტიპი - განცხადებასთან ერთად ლოგოტიპის დამატების
                        შემთხვევაში, საფასურს ემატება 20 ლარი თითო განცხადებაზე.
                        უცხო ენა - თუ განცხადება 2 ან 3 ენაზე ქვეყნდება,
                        საფასურს ემატება 10 ლარი თითო ენაზე.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-4 mt-8">
                <Link
                    className="w-full flex justify-center items-center py-2 px-3 bg-blue-500 hover:bg-blue-600 duration-200 transition-all text-white rounded-lg"
                    to={"/careers/create"}
                >
                    გამოაქვეყნე
                </Link>
            </div>

            <div className="w-full flex justify-between items-center mt-8">
                <Link
                    to={"/"}
                    className="text-blue-500 text-lg flex items-center gap-2"
                >
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    <span>უკან დაბრუნება</span>
                </Link>

                <Link
                    className="text-2xl flex items-center gap-2 text-blue-500 hover:text-blue-600 duration-200 transition-all"
                    to={"https://www.facebook.com"}
                >
                    <span className="text-lg">გადადი Facebook-ზე</span>
                    <span>
                        <FaSquareFacebook />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default CareerShowRatesPage;
