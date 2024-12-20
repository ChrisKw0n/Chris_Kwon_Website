import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./scene"), {
  ssr: false,
});

export default function GlassComponent() {
  return (
    <main>
      <Scene />
    </main>
  );
}
