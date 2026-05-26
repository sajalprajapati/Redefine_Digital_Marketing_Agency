const CLIENT_LOGOS = [
  { name: "Jindal Steel", mark: "JS", tone: "orange" },
  { name: "ShipEase", mark: "SE", tone: "light" },
  { name: "Praeferre", mark: "PR", tone: "green" },
  { name: "Ruson Healthcare", mark: "RH", tone: "blue" },
  { name: "RSM", mark: "RS", tone: "light" },
  { name: "Realconnect", mark: "RC", tone: "light" },
  { name: "C1", mark: "C1", tone: "cyan" },
  { name: "Sunny Visual", mark: "SV", tone: "light" },
  { name: "T-Series", mark: "T", tone: "red" },
  { name: "Infinity", mark: "IN", tone: "magenta" },
  { name: "PAX TV", mark: "PX", tone: "light" },
  { name: "Times Music", mark: "TM", tone: "magenta" },
  { name: "Object & Co", mark: "OC", tone: "light" },
  { name: "Unizenith", mark: "UZ", tone: "blue" },
  { name: "Fay", mark: "FY", tone: "light" },
  { name: "Lord's", mark: "LD", tone: "blue" },
  { name: "Intech", mark: "IT", tone: "green" },
  { name: "RG Consultancy", mark: "RG", tone: "yellow" },
  { name: "JSG Group", mark: "JG", tone: "light" },
  { name: "Galio", mark: "GL", tone: "orange" },
  { name: "NCS Wizards", mark: "NW", tone: "light" },
];

export const ClientLogoWall = () => {
  return (
    <section className="client-logo-wall" data-testid="client-logo-wall">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="client-logo-grid">
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo.name} className="client-logo-cell">
              {logo.image ? (
                <img className="client-logo-img" src={logo.image} alt={logo.name} />
              ) : (
                <div className={`client-logo-mark client-logo-mark--${logo.tone}`}>
                  {logo.mark}
                </div>
              )}
              <div className="client-logo-name">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
