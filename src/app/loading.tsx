import { Spinner } from "@/components/ui/spinner";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-main-color text-white">
      <Spinner className="size-25" />
    </div>
  );
}
