const partners = [
  "Adanian Labs",
  "Binary Labs",
  "Afromark",
  "AI Labs",
  "Redefine Labs",
  "NVIDIA",
  "Imperial",
  "Harlos",
  "DLabs",
];

const PartnersSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h3 className="text-center text-xl font-semibold text-muted-foreground">
          Our Partners & Clients
        </h3>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 mx-8 glass-card rounded-xl px-8 py-4 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-muted-foreground font-medium whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
