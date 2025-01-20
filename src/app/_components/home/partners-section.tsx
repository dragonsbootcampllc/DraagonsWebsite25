import Image from 'next/image';
import { cn } from '~/lib/utils';

const companies = [
  { name: 'actusgo', logo: '/images/partenars/actusgo.png' },
  { name: 'digital', logo: '/images/partenars/DigitalOcean_logo.png' },
  { name: 'levelup', logo: '/images/partenars/levelup.png' },
  { name: 'Netflix', logo: '/images/partenars/actusgo.png' },
  { name: 'YouTube', logo: '/images/partenars/actusgo.png' },
  { name: 'Instagram', logo: '/images/partenars/actusgo.png' },
];

export default function PartnersSection(): JSX.Element {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3
            className={cn(
              `flex -translate-y-4 flex-col items-center justify-center text-balance bg-gradient-to-br from-white from-30% to-primary-100/40 bg-clip-text py-6 text-center text-4xl font-medium leading-none tracking-tighter text-transparent md:text-4xl lg:text-6xl 2xl:text-7xl`,
            )}
          >
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {companies.map((company, idx) => (
                <div
                  key={idx}
                  className="flex h-20 w-full items-center justify-center p-2" // Centering container
                >
                  <Image
                    src={company.logo}
                    width={160}
                    height={40}
                    className="h-auto w-full max-w-[120px] object-contain filter grayscale transition-all hover:filter-none" // Responsive and centered
                    alt={company.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}