import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import Image from "next/image";

import { CSS } from "@dnd-kit/utilities";
import { ImageItemProps } from "./ProductForm";

function ImageItem({ src, alt, id }: ImageItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Image src={src} alt={alt} width={400} height={400} />
    </div>
  );
}

export default ImageItem;
