import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function LHS_1({}: Props) {
  return (
    <div className="p-3 border-b dark:border-b-slate-700">
        <Link href={"#"}>
        <div className="flex w-full items-center justify-between ">
          <h3 className="font-semibold text-2xl">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
      <div className="w-full relative">
        <Image
        priority={true}
          className="w-full max-h-[500px] rounded object-cover"
          src="https://static.toiimg.com/thumb/width-800,height-450,imgsize-33742,msid-110055791/110055791.jpg"
          width={1200}
          height={800}
          alt="Picture of the author"
        />
        <h3 className=" max-w-[40rem] line-clamp-2  font-semibold text-base tracking-tight lg:text-xl absolute bottom-3 left-3 text-secondary ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eius ad, soluta quo tempora beatae maxime odit magnam laudantium quod
          veniam rerum vel sed harum. Impedit ipsam distinctio fuga ea.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius
          ad, soluta quo tempora beatae maxime odit magnam laudantium quod
          veniam rerum vel sed harum. Impedit ipsam distinctio fuga ea.
        </h3>
      </div>
      <div className=" grid sm:grid-cols-4 gap-3 my-2">
        {/* content */}
        <div className="lg:col-span-1 sm:col-span-2  relative border  ">
          <Image
            className="w-full sm:max-h-[400px] max-h-[150px] rounded object-cover"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className=" p-3">
            <h3 className="line-clamp-2  font-medium text-lg tracking-tight lg:text-base  ">
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
        <div className="lg:col-span-1 sm:col-span-2 relative border  ">
          <Image
            className="w-full sm:max-h-[400px] max-h-[150px] rounded object-cover"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className=" p-3">
            <h3 className="line-clamp-2  font-medium text-lg tracking-tight lg:text-base  ">
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
        <div className="lg:col-span-1 sm:col-span-2 relative border  ">
          <Image
            className="w-full sm:max-h-[400px] max-h-[150px] rounded object-cover"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className=" p-3">
            <h3 className="line-clamp-2  font-medium text-base tracking-tight lg:text-base  ">
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
        <div className="lg:col-span-1 sm:col-span-2 relative border  ">
          <Image
            className="w-full sm:max-h-[400px] max-h-[150px] rounded object-cover"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className=" p-3">
            <h3 className="line-clamp-2  font-medium text-base tracking-tight lg:text-base  ">
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
  );
}
