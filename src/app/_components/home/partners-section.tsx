import Image from 'next/image';
import { cn } from '~/lib/utils';

const companies = [
  { name: 'Actusgo', logo: '/images/partenars/actusgo.svg' },
  { name: 'DigitalOcean', logo: '/images/partenars/DigitalOcean_logo.svg' },
  { name: 'levelup', logo: '/images/partenars/levelup.png' },
  { name: 'Neferdata', logo: '/images/partenars/Neferdata.svg' },
  { name: 'Talabatak', logo: '/images/partenars/talabatak.svg' },
  { name: 'Course Topia', logo: '/images/partenars/Course-Topia-Fav.svg' },
];

export default function PartnersSection(): JSX.Element {
  return (
    <section id="companies" className=" py-14">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <h3
          className={cn(
            `flex -translate-y-4 flex-col items-center justify-center text-balance bg-gradient-to-br from-white from-30% to-primary-100/40 bg-clip-text py-6 text-center text-4xl font-bold leading-none tracking-tighter text-transparent md:text-5xl lg:text-6xl 2xl:text-7xl`,
          )}
        >
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-10">
          <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {companies.map((company, idx) => (
              <div
                key={idx}   
                className="flex h-24 w-full items-center justify-center p-2 transition-transform duration-300 hover:scale-105" // Centering container with hover effect
              >
                <Image
                  src={company.logo}
                  width={90}
                  height={90}
                  className="" // Responsive and centered
                  alt={company.name}
                />
                  <p className="text-2xl ml-1 text-gray-400 font-semibold">{company.name}</p>
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}