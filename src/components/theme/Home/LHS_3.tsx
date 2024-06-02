import Image from "next/image";
import Link from "next/link";

Image;

type Props = {};

export default function LHS_3({}: Props) {
  return (
    <div className="p-3 border-b dark:border-b-slate-700">
          <Link href={"#"}>
        <div className="flex w-full items-center justify-between ">
          <h3 className="font-semibold text-2xl">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
    <div className="grid sm:grid-cols-2 gap-3 p-3 ">
      <div className=" sm:col-span-1  relative border ">
        <Image
          className="w-full sm:max-h-[400px] rounded object-cover"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={1200}
          height={800}
          alt="Picture of the author"
        />
        <div className=" p-3">
          <h3 className=" line-clamp-2   font-semibold text-xl leading-loose tracking-tight lg:text-xl  my-2 ">
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
      <div className="grid grid-rows-4 gap-3">
        <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3 ">
          <Image
            className=" max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={100}
            height={75}
            alt="Picture of the author"
          />
          <div>
            <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-gray-600 tracking-tight text-xs">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3 ">
          <Image
            className=" max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={100}
            height={75}
            alt="Picture of the author"
          />
          <div>
            <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-gray-600 tracking-tight text-xs">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3 ">
          <Image
            className=" max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={100}
            height={75}
            alt="Picture of the author"
          />
          <div>
            <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-gray-600 tracking-tight text-xs">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="bg-secondary sm:col-span-1 col-span-2 flex gap-3 ">
          <Image
            className=" max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={100}
            height={75}
            alt="Picture of the author"
          />
          <div>
            <h3 className=" line-clamp-2 font-medium text-base  tracking-tight lg:text-lg  mb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-gray-600 tracking-tight text-xs">
              22 jun 2024
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
