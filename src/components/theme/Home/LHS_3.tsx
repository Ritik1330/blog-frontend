import Image from "next/image";
import Link from "next/link";

Image;

type Props = {};

export default function LHS_3({}: Props) {
  return (
    <div className="border-b bg-muted/85 p-3 dark:border-b-slate-700">
      <Link href={"#"}>
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-semibold">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
      <div className="grid gap-3 p-3 sm:grid-cols-2">
        <div className="relative border sm:col-span-1">
          <Image
            className="w-full rounded object-cover sm:max-h-[400px]"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
          <div className="p-3">
            <h3 className="my-2 line-clamp-2 text-xl font-semibold leading-loose tracking-tight lg:text-xl">
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
        <div className="grid grid-rows-4 gap-3">
          <div className="col-span-2 flex gap-3 sm:col-span-1">
            <Image
              className="max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
              src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
              width={100}
              height={75}
              alt="Picture of the author"
            />
            <div>
              <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius ad, soluta quo tempora beatae maxime odit
                magnam laudantium quod veniam rerum vel sed harum. Impedit ipsam
                distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis eius ad, soluta quo tempora
                beatae maxime odit magnam laudantium quod veniam rerum vel sed
                harum. Impedit ipsam distinctio fuga ea.
              </h3>
              <h6 className="text-xs tracking-tight text-gray-600">
                22 jun 2024
              </h6>
            </div>
          </div>
          <div className="col-span-2 flex gap-3 sm:col-span-1">
            <Image
              className="max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
              src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
              width={100}
              height={75}
              alt="Picture of the author"
            />
            <div>
              <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius ad, soluta quo tempora beatae maxime odit
                magnam laudantium quod veniam rerum vel sed harum. Impedit ipsam
                distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis eius ad, soluta quo tempora
                beatae maxime odit magnam laudantium quod veniam rerum vel sed
                harum. Impedit ipsam distinctio fuga ea.
              </h3>
              <h6 className="text-xs tracking-tight text-gray-600">
                22 jun 2024
              </h6>
            </div>
          </div>
          <div className="col-span-2 flex gap-3 sm:col-span-1">
            <Image
              className="max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
              src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
              width={100}
              height={75}
              alt="Picture of the author"
            />
            <div>
              <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius ad, soluta quo tempora beatae maxime odit
                magnam laudantium quod veniam rerum vel sed harum. Impedit ipsam
                distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis eius ad, soluta quo tempora
                beatae maxime odit magnam laudantium quod veniam rerum vel sed
                harum. Impedit ipsam distinctio fuga ea.
              </h3>
              <h6 className="text-xs tracking-tight text-gray-600">
                22 jun 2024
              </h6>
            </div>
          </div>
          <div className="col-span-2 flex gap-3 sm:col-span-1">
            <Image
              className="max-h-[75px] max-w-[100px] rounded object-cover md:col-span-1"
              src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
              width={100}
              height={75}
              alt="Picture of the author"
            />
            <div>
              <h3 className="mb-2 line-clamp-2 text-base font-medium tracking-tight lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eius ad, soluta quo tempora beatae maxime odit
                magnam laudantium quod veniam rerum vel sed harum. Impedit ipsam
                distinctio fuga ea.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis eius ad, soluta quo tempora
                beatae maxime odit magnam laudantium quod veniam rerum vel sed
                harum. Impedit ipsam distinctio fuga ea.
              </h3>
              <h6 className="text-xs tracking-tight text-gray-600">
                22 jun 2024
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
