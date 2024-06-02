// "use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import RawTool from "@editorjs/raw";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";

type Props = {};
const TOOLS = {
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
};

const EditorWrapper = () => {
  useEffect(() => {
    const allWrappers = document.querySelectorAll(".editor-wrapper");

    allWrappers.forEach((wrapper) => {
      const editor = wrapper.querySelector(".editorjs");

      // Check if editor element exists before initializing EditorJS
      if (editor) {
        const editorInstance = new EditorJS({
          // holder: editor,
          holder: "editorjs",
          // minHeight: 0,
          tools: TOOLS,
          // data: {
          //   blocks: [
          //     {
          //       type: 'paragraph',
          //       data: {
          //         text: 'delete me',
          //       },
          //     },
          //    ..
          //   ],
          // },
          onReady: () => {
            wrapper.addEventListener("click", () => {
              allWrappers.forEach((wr) => wr.classList.remove("active"));
              wrapper.classList.add("active");
            });
          },
        });

        return () => {
          editorInstance.destroy(); // Cleanup when component unmounts
        };
      }
    });
  }, []); // Run this effect only once on component mount

  return (
    <div className=" flex flex-col gap-4 w-full ">
      <PageTitle title={"Aritcle Body"} />
      <div className="editor-wrapper">
        <Card className="rounded-md ">
          <div id="editorjs" className="editorjs"></div>
        </Card>
      </div>
    </div>
  );
};

export default EditorWrapper;
