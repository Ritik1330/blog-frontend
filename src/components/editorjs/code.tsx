import { cn } from "@/lib/utils";
import HTMLReactParser from "html-react-parser";

export interface codeType {
  data: codeBlockData;
  className?: string;
}
export interface codeBlockData {
  code: string;
  lang?: string;
}
export function CodeBlock({ data, className }: codeType) {
  return (
    <pre className={cn("rounded-sm bg-primary p-3 text-secondary", className)}>
      {data?.code && <code>{`${HTMLReactParser(data.code)}}`}</code>}
    </pre>
  );
}
