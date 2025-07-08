import ProfileHeader from "./profile-header";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="relative dark:bg-secondaryBlack inset-0 flex min-h-[90dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      {/* Logo positioned absolutely inside the header */}
      <div className="absolute top-10 left-10">
        <Logo />
      </div>
      <ProfileHeader />
    </header>
  );
}
