import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function RHS_1({}: Props) {
  return (
    <div className="gap-3 m-3 mb-5   min-h-3 flex flex-col lg:flex-col sm:flex-row">
      <div className="flex">
        <h3 className="min-w-fit mr-2 ">Latest News</h3>
        <hr className="h-full my-auto w-full" />
        <Link className="min-w-fit border rounded-full px-2 text-primary"  href={"#"}> View More</Link>
      </div>

      <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3  rounded overflow-hidden ">
        <Image
          className=" max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-gray-600 tracking-tight text-xs">22 jun 2024</h6>
        </div>
      </div>
      <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3  rounded overflow-hidden ">
        <Image
          className=" max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-gray-600 tracking-tight text-xs">22 jun 2024</h6>
        </div>
      </div>
      <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3  rounded overflow-hidden ">
        <Image
          className=" max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-gray-600 tracking-tight text-xs">22 jun 2024</h6>
        </div>
      </div>
      <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3  rounded overflow-hidden ">
        <Image
          className=" max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-gray-600 tracking-tight text-xs">22 jun 2024</h6>
        </div>
      </div>
    </div>
  );
}
