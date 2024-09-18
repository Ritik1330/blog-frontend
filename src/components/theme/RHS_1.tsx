import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function RHS_1({}: Props) {
  return (
    <div className="flex min-h-3 flex-col gap-3 bg-muted/85 p-3 sm:flex-row lg:flex-col">
      <div className="flex">
        <h3 className="mr-2 min-w-fit">Latest News</h3>
        <hr className="my-auto w-full" />
        <Link
          className="min-w-fit rounded-full border px-2 text-primary"
          href={"#"}
        >
          View More
        </Link>
      </div>

      <div className="col-span-2 flex gap-3 overflow-hidden rounded sm:col-span-1">
        <Image
          className="max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-xs tracking-tight text-gray-600">22 jun 2024</h6>
        </div>
      </div>
      <div className="col-span-2 flex gap-3 overflow-hidden rounded sm:col-span-1">
        <Image
          className="max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-xs tracking-tight text-gray-600">22 jun 2024</h6>
        </div>
      </div>
      <div className="col-span-2 flex gap-3 overflow-hidden rounded sm:col-span-1">
        <Image
          className="max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-xs tracking-tight text-gray-600">22 jun 2024</h6>
        </div>
      </div>
      <div className="col-span-2 flex gap-3 overflow-hidden rounded sm:col-span-1">
        <Image
          className="max-h-[80px] max-w-[100px] rounded object-cover md:col-span-1"
          src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
          width={100}
          height={80}
          alt="Picture of the author"
        />
        <div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h6 className="text-xs tracking-tight text-gray-600">22 jun 2024</h6>
        </div>
      </div>
    </div>
  );
}
