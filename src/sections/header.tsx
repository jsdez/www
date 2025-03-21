import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="relative dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      
      {/* Logo positioned absolutely inside the header */}
      <div className="absolute top-10 left-10">
        <Logo />
      </div>

      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="my-12 mt-8 text-5xl font-normal leading-relaxed md:text-6xl lg:text-7xl lg:leading-relaxed">
          Discover. Automate. Transform.
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          By leveraging process automation and AI, we help organisations streamline operations, enhance productivity, and solve complex problems.
          <br /> Let us partner with you to create smarter, more efficient workflows that drive lasting results.
        </p>
        <Button
          size="lg"
          className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
          onClick={onContactClick}
        >
          Get in touch
        </Button>
      </div>
    </header>
  );
}
