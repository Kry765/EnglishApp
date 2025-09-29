type CompanyLogoProps = {
  colorGreen: string;
  className: string;
};

export default function CompanyLogo({
  colorGreen,
  className,
}: CompanyLogoProps) {
  return (
    <div className={className}>
      Learn<span className={colorGreen}> English</span>
    </div>
  );
}
