import { motion } from 'framer-motion';

const Loader = () => {
  const text = "EZEMMUO";
  
  return (
    <div className="h-screen bg-[#081825]  flex items-center justify-center w-full mx-auto">
      <div className="flex gap-2 flex-wrap justify-center max-w-2xl mx-auto">
        {text.split("").map((letter, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-15, 0, -15],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1, // Creates wave effect
            }}
            className={`
              md:w-12 md:h-12 w-9 h-9
              flex items-center justify-center
              bg-[#0145FE] 
              rounded-lg
              shadow-lg
              ${letter === " " ? 'bg-transparent' : ''}
            `}
          >
            <span className="text-xl font-bold text-white">
              {letter}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader;