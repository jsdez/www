import ProfileCard from '@/components/ui/profile-card'

export default function About() {
  return (
    <section className="border-b-border dark:border-b-darkBorder dark:bg-secondaryBlack inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          About Us
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          {/* Image Card Above Mission */}
          <ProfileCard
            imageUrl="/Jake-profile.png"
            caption="Jake Dennison - Founder"
          />

          {/* Mission Statement */}
          <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5 min-h-48 w-full lg:w-1/2 text-center">
            <h3 className="text-xl font-heading text-text dark:text-darkText">Our Mission</h3>
            <p className="text-lg text-text dark:text-darkText mt-4">
              Our mission is to empower businesses through automation and innovative solutions, helping them achieve more with less effort. We believe that technology should be accessible, adaptable, and impactful for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
