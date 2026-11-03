export const Logo = ({ className = "h-9 w-9" }) => (
    <svg viewBox="0 0 64 64" className={className} aria-label="BK monogram" data-testid="logo-mark">
        <rect width="64" height="64" className="fill-background" />
        <text
            x="30"
            y="45"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="38"
            fontWeight="700"
            className="fill-foreground"
        >
            B
        </text>
        <rect x="40" y="40" width="13" height="13" className="fill-primary" />
    </svg>
);

export default Logo;
