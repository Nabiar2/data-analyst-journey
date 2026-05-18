export default function SkillableLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 48 : 36;
  const textSizeClass =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <div className="flex items-center gap-2.5">
      <div
        style={{
          width: iconSize,
          height: iconSize,
          background: "linear-gradient(135deg, #00C9A7 0%, #00E5C8 100%)",
          borderRadius: 8,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 6,
          gap: 2,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 4, height: "38%", background: "rgba(255,255,255,0.65)", borderRadius: 2 }} />
        <div style={{ width: 4, height: "62%", background: "rgba(255,255,255,0.82)", borderRadius: 2 }} />
        <div style={{ width: 4, height: "88%", background: "#fff", borderRadius: 2 }} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-black tracking-tight text-text-primary ${textSizeClass}`}>
          SKILLABLE
        </span>
        <span className="text-[10px] font-semibold tracking-widest text-accent uppercase">
          Academy
        </span>
      </div>
    </div>
  );
}
