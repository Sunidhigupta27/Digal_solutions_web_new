export default function TypewriterHeading({ text, as: Tag = "h1", style, className }) {
  return (
    <Tag className={`typewriter ${className || ""}`} style={style}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}