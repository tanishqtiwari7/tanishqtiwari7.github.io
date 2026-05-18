import picoIcon from "../assets/pico-icon.svg";

type NavbarProps = {
  onResumeClick: () => void;
};

export default function Navbar({
  onResumeClick,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-5 z-40">
      <div className="mx-auto flex justify-center">
        <nav
          aria-label="Primary"
          className="
            relative
            flex
            h-14
            w-[92%]
            items-center
            justify-between
            rounded-full
            border
            border-white/30
            bg-white/40
            px-5
            shadow-lg
            backdrop-blur-xl
            sm:w-[80%]
            lg:w-[55%]
          "
        >
          {/* Left — clickable brand */}
          <a
            href="#home"
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >
            <img
              src={picoIcon}
              alt="Pico icon"
              className="h-7 w-7"
            />

            <span className="font-caveat text-2xl font-semibold text-neutral-900">
              Tanishq
            </span>
          </a>

          {/* Right */}
          <button
            type="button"
            onClick={onResumeClick}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-neutral-900
              px-5
              py-2
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
}