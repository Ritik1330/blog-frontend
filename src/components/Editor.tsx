import React, { useEffect, useRef, useState } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import CodeTool from "@editorjs/code";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

// import { Card } from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import Header from "@editorjs/header";
import RawTool from "@editorjs/raw";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";

export interface EditorProps {
  data: any | null;
  onChange: (data: any) => void;
  holder: string;
  className?: string;
}

const EDITOR_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      levels: [1, 2, 3, 4, 5, 6], // Define the available heading levels
      defaultLevel: 2, // Set the default heading level
    },
    shortcut: "CMD+SHIFT+H", // Optional shortcut for the Heading Tool
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+C", // Optional shortcut for the CheckList Tool
  },
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      defaultStyle: "ordered", //unordered and ordered handel in
    },
    shortcut: "CMD+SHIFT+L",
  },
  embed: {
    class: Embed,
    inlineToolbar: true,
    // config: { services: { youtube: true}}
    shortcut: "CMD+SHIFT+E",
  },

  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+Q",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2, // Default number of rows
      cols: 2, // Default number of columns
    },
    shortcut: "CMD+SHIFT+T",
  },
  Marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  raw: {
    class: RawTool,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+R",
  },
  code: {
    class: CodeTool,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+A",
  },
};

const Editor: React.FC<EditorProps> = ({
  data,
  onChange,
  holder,
  className,
}) => {
  const editorInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    const initializeEditor = async () => {
      if (!editorInstance.current) {
        editorInstance.current = new EditorJS({
          holder: holder,
          placeholder: "Start writing here...",
          tools: EDITOR_TOOLS,
          data: data || {}, // Initialize with existing data if provided
          onChange: async () => {
            if (editorInstance.current) {
              const savedData = await editorInstance.current.save();
              onChange(savedData);
            }
          },
        });
      }
    };

    initializeEditor();

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy;
        editorInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "min-h-96 w-full rounded-sm border shadow dark:[&>*]:min-h-96 dark:[&>*]:bg-black",
        className,
      )}
      id={holder}
    />
  );
};

export default Editor;
