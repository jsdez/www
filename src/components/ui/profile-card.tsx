type Props = {
  imageUrl: string;
  caption: string;
};

export default function ProfileCard({ imageUrl, caption }: Props) {
  return (
    <figure className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col rounded-base border-2 bg-white w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] transition-all duration-300 ease-in-out pt-5">
      <img
        className="w-100 h-auto object-cover rounded-t-base transition-all duration-300 ease-in-out"
        src={imageUrl}
        alt="Jake Dennison - Founder"
      />
      <figcaption className="border-t-2 dark:bg-secondaryBlack text-text dark:text-darkText border-slate-200 dark:border-darkBorder bg-bg p-4 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
