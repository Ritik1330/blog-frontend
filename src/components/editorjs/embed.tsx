import { cn } from "@/lib/utils";
import HTMLReactParser from "html-react-parser";

export interface EmbedBlockData {
  service: string;
  source: string;
  embed?: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface EmbedType {
  data: EmbedBlockData;
  className?: string;
  rel?: string;
  sandbox?: string | null;
}

export function EmbedBlock({ data, className, sandbox, rel }: EmbedType) {
    console.log(data)
  const figureprops: {
    [s: string]: string;
  } = {};

  if (data?.width) {
    figureprops.width = data.width.toString();
  }

  if (data?.height) {
    figureprops.height = data.height.toString();
  }

  if (sandbox) {
    figureprops.sandbox = sandbox.toString();
  }
  return (
    <figure className="flex justify-center">
      <div>
        {data?.embed ? (
          <iframe
            className={cn("", className)}
            src={data.embed}
            {...figureprops}
            frameBorder="0"
            data-src={data.source}
          ></iframe>
        ) : (
          <a href={data?.source} target="_blank" rel={rel}>
            {data?.source}
          </a>
        )}
        {data?.caption && (
          <figcaption className="my-1 border p-3">
            {HTMLReactParser(data.caption)}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
