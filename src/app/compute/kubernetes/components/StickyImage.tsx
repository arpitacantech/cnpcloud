import { motion } from "framer-motion";
// import serverImage from "/Pff4jiCRoIQdwf1slphQVhSArY.png";

export const StickyImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky-glass-image rounded-3xl overflow-hidden p-2"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src='https://framerusercontent.com/images/MRfxoi6b3x5LAQs36zE406ggD8.png'
          alt="Windows Server Management Infrastructure"
          className="w-full h-[450px] object-cover"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <div className="glass-card rounded-xl Seamless Demand Handlingp-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-1">
              Enterprise Grade
            </p>
            <p className="text-sm text-foreground/80">
              Secure, Scalable, Reliable
            </p>
          </div>
        </motion.div>

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-2xl opacity-40 -z-10" />
      </div>
    </motion.div>
  );
};
