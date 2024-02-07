import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-7">
      <div className="w-fit h-fit flex items-center gap-3">
        <div>
          <Image src="/logo.png" width={40} height={40} />
        </div>
        <h1 className="text-4xl font-bold">Geld</h1>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>

        <div>Түр хүлээнэ үү...</div>
      </div>
    </div>
  );
}
