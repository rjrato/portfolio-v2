export function SectionGlow() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "oklch(0.65 0.18 250 / 0.12)",
        filter: "blur(100px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
