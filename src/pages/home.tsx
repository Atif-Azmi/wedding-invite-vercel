import { motion } from "framer-motion";
import { Countdown } from "@/components/countdown";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(30,25%,78%)] flex items-start justify-center py-10 px-4">
      
      {/* Card wrapper — portrait ratio like a physical invitation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
        style={{ maxWidth: "480px" }}
      >
        {/* Outer decorative border */}
        <div className="absolute inset-0 border-2 border-[hsl(42,60%,55%)]/40 rounded-sm pointer-events-none z-10" />
        <div className="absolute inset-[6px] border border-[hsl(42,60%,55%)]/20 rounded-sm pointer-events-none z-10" />

        {/* Card body */}
        <div className="bg-background selection:bg-primary/20 selection:text-primary font-sans px-8 py-12 relative z-0">

          {/* Bismillah Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-12 space-y-4"
          >
            <motion.div variants={fadeIn} className="text-4xl md:text-5xl font-[Noto_Nastaliq_Urdu] text-primary pt-4 leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.div>
            <motion.div variants={fadeIn} className="font-sans text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              In the name of Allah, the Most Gracious, the Most Merciful
            </motion.div>
          </motion.section>

          <Divider />

          {/* Blessings Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <p className="text-sm italic text-secondary/80">With the Blessings of</p>
            <p className="text-base font-display mt-1 text-secondary">Late Mrs./Mr. Abdul Razzaq Azmi</p>

            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mt-6">
              Request the honor of your gracious presence<br />at the marriage ceremony of their Grand Son
            </p>
          </motion.section>

          <Divider />

          {/* Couple Names Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center my-10"
          >
            <motion.div variants={fadeIn} className="space-y-1">
              <div className="text-xl text-primary/80 font-[Noto_Nastaliq_Urdu] leading-relaxed">محمد ابوذر اعظمی</div>
              <h1 className="text-5xl md:text-6xl font-[Great_Vibes] text-secondary leading-tight py-2">
                Mohd. Abuzar Azmi
              </h1>
              <p className="text-xs text-muted-foreground mt-1">S/o Mohd. Abdul Rafiq Azmi</p>
              <p className="text-xs text-muted-foreground">Azmi Manzil, Zyarat Naka, Seoni (M.P.)</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-3xl font-[Great_Vibes] text-primary/60 my-6">
              With
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-1">
              <div className="text-xl text-primary/80 font-[Noto_Nastaliq_Urdu] leading-relaxed">ثانیہ قریشی</div>
              <h1 className="text-5xl md:text-6xl font-[Great_Vibes] text-secondary leading-tight py-2">
                Saniya Qureshi
              </h1>
              <p className="text-xs text-muted-foreground mt-1">D/o Jameel Qureshi Sahab</p>
              <p className="text-xs text-muted-foreground">Aminganj, Barghat, Dist. Seoni (M.P.)</p>
            </motion.div>
          </motion.section>

          <Divider />

          {/* Programme Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="my-10"
          >
            <motion.h2 variants={fadeIn} className="text-xs font-display text-center text-secondary mb-6 tracking-[0.2em] uppercase">
              Programme
            </motion.h2>

            <div className="space-y-4">
              <motion.div variants={fadeIn} className="border border-primary/20 bg-card/40 px-6 py-5 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-primary/50"></div>
                </div>
                <h3 className="text-lg font-display text-secondary mb-1">Nikah</h3>
                <p className="text-xs text-primary font-medium mb-1">Insha Allah</p>
                <p className="text-sm font-medium">Wednesday, 29th April 2026</p>
              </motion.div>

              <motion.div variants={fadeIn} className="border border-primary/20 bg-card/40 px-6 py-5 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-primary/50"></div>
                </div>
                <h3 className="text-lg font-display text-secondary mb-1">Dawat-e-Walima (Reception)</h3>
                <p className="text-xs text-primary font-medium mb-1">Insha Allah</p>
                <p className="text-sm font-medium">Thursday, 30th April 2026</p>
                <p className="text-xs text-muted-foreground mt-1">After Namaz-e-Magrib &bull; 7:00 PM Onward</p>
              </motion.div>
            </div>
          </motion.section>

          <Divider />

          {/* Venue Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="text-center my-10"
          >
            <h2 className="text-xs font-display text-secondary mb-4 tracking-[0.2em] uppercase">Venue</h2>
            <p className="text-xl font-display text-secondary mb-1">Royal Lawn</p>
            <p className="text-sm text-muted-foreground mb-5">Badi Zyarat, Seoni (M.P.)</p>

            <a
              href="https://maps.google.com/?q=Royal+Marriage+Lawn+Seoni"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-venue-map"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-primary/5 transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 10C20 15 12 22 12 22C12 22 4 15 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              View on Google Maps
            </a>
          </motion.section>

          <Divider />

          {/* Countdown Timer */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="my-10"
          >
            <h2 className="text-center text-[10px] font-display text-secondary/60 mb-5 tracking-[0.2em] uppercase">Awaiting the Blessed Moment</h2>
            <Countdown />
          </motion.section>

          <Divider />

          {/* Footer / Dua */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="text-center pt-8 pb-6"
          >
            <p className="text-base italic mb-6 text-secondary/80 px-4 leading-relaxed">
              "And We created you in pairs."
              <span className="block text-xs font-sans mt-1 text-muted-foreground not-italic">(Quran 78:8)</span>
            </p>

            <div className="mt-8 text-[11px] tracking-widest uppercase text-muted-foreground space-y-1">
              <p className="text-[10px]">RSVP</p>
              <p className="text-secondary font-medium text-sm">Mohammad Abdul Rafiq Azmi</p>
              <p className="text-[10px]">(Dr. R. Azmi)</p>
            </div>

            <p className="text-[10px] text-muted-foreground/60 mt-8 tracking-widest">
              With The Best Compliments From<br />
              <span className="text-secondary/60">Azmi Brothers and Family &bull; All Relative and Friends</span>
            </p>
          </motion.section>

        </div>
      </motion.div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px flex-1 bg-primary/15" />
      <div className="w-1.5 h-1.5 rotate-45 bg-primary/40" />
      <div className="h-px flex-1 bg-primary/15" />
    </div>
  );
}
