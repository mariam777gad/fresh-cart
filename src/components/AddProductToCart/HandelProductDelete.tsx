'use client';
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { handleProductDelete } from "./AddToCard.Action";

export default function HandelProductDelete({productId}:{productId:string}) {
  function handelRemovedProduct() {
    handleProductDelete(productId);
  }
  return (
    <Button
    onClick={handelRemovedProduct}
      variant="ghost"
      size="icon"
      className="text-red-500 hover:bg-red-50 hover:text-red-600 border"
    >
      <Trash2 size={18} />
    </Button>
  );
}
