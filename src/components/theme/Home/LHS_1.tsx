import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function LHS_1({}: Props) {
  return (
    <div className="bg-muted/85 p-3">
      <Link href={"#"}>
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-semibold">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
      <div className="relative w-full">
        <Image
          priority={true}
          className="max-h-[500px] w-full rounded object-cover"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg "
          width={1200}
          height={800}
          alt="Picture of the author"
        />
        <h3 className="dark:bg-slate-200/30shadow-black absolute bottom-3 line-clamp-2 w-full bg-slate-600/30 px-6 text-base font-bold tracking-tight text-secondary drop-shadow-2xl dark:shadow-white lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eius ad, soluta quo tempora beatae maxime odit magnam laudantium quod
          veniam rerum vel sed harum. Impedit ipsam distinctio fuga ea.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius
          ad, soluta quo tempora beatae maxime odit magnam laudantium quod
          veniam rerum vel sed harum. Impedit ipsam distinctio fuga ea.
        </h3>
      </div>
      <div className="my-2 grid gap-3 sm:grid-cols-4">
        {/* content */}
        <div className="relative border sm:col-span-2 lg:col-span-1">
          <Image
            className="max-h-[150px] w-full rounded object-cover sm:max-h-[400px]"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className="p-3">
            <h3 className="line-clamp-2 text-lg font-medium tracking-tight lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-xs tracking-tight text-gray-600">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="relative border sm:col-span-2 lg:col-span-1">
          <Image
            className="max-h-[150px] w-full rounded object-cover sm:max-h-[400px]"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className="p-3">
            <h3 className="line-clamp-2 text-lg font-medium tracking-tight lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-xs tracking-tight text-gray-600">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="relative border sm:col-span-2 lg:col-span-1">
          <Image
            className="max-h-[150px] w-full rounded object-cover sm:max-h-[400px]"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className="p-3">
            <h3 className="line-clamp-2 text-base font-medium tracking-tight lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-xs tracking-tight text-gray-600">
              22 jun 2024
            </h6>
          </div>
        </div>
        <div className="relative border sm:col-span-2 lg:col-span-1">
          <Image
            className="max-h-[150px] w-full rounded object-cover sm:max-h-[400px]"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className="p-3">
            <h3 className="line-clamp-2 text-base font-medium tracking-tight lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
              laudantium quod veniam rerum vel sed harum. Impedit ipsam
              distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis eius ad, soluta quo tempora beatae
              maxime odit magnam laudantium quod veniam rerum vel sed harum.
              Impedit ipsam distinctio fuga ea.
            </h3>
            <h6 className="text-xs tracking-tight text-gray-600">
              22 jun 2024
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
