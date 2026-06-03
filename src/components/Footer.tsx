import { profile, navLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-[70px] pb-[50px] border-t border-line">
      <div className="mx-auto w-full max-w-content px-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-10">
          <div>
            <a href="#top" className="flex items-center gap-3 font-semibold text-[19px] tracking-tight">
              <span className="grid place-items-center w-[38px] h-[38px] rounded-[11px] bg-ink text-white font-serif font-bold text-[19px]">
                C
              </span>
              {profile.name}
            </a>
            <p className="text-muted max-w-[380px] mt-4 text-[15px]">
              {profile.role} based in {profile.location}, building responsive, performant web experiences with React and Next.js.
            </p>
          </div>

          <div>
            <h5 className="text-[12px] tracking-[0.14em] uppercase text-muted mb-4">Navigate</h5>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block py-1.5 text-neutral-700 text-[15px] hover:text-black">
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h5 className="text-[12px] tracking-[0.14em] uppercase text-muted mb-4">Connect</h5>
            <a href={`mailto:${profile.email}`} className="block py-1.5 text-neutral-700 text-[15px] hover:text-black">
              Email
            </a>
            <a href={profile.phoneHref} className="block py-1.5 text-neutral-700 text-[15px] hover:text-black">
              Phone
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="block py-1.5 text-neutral-700 text-[15px] hover:text-black">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener" className="block py-1.5 text-neutral-700 text-[15px] hover:text-black">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-[50px] pt-[26px] border-t border-line flex justify-between flex-wrap gap-3 text-muted text-[14px]">
          <span>&copy; {year} {profile.name}. All rights reserved.</span>
          <span>Designed &amp; built by {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
