import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience 
              building scalable web applications. I love turning complex problems 
              into simple, beautiful designs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across modern JavaScript frameworks, cloud 
              technologies, and agile development practices. I'm always eager to 
              learn new technologies and contribute to innovative projects.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Frontend Development (React, Vue, TypeScript)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Backend Development (Node.js, Python, PostgreSQL)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Cloud Architecture (AWS, Docker, Kubernetes)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  UI/UX Design & Prototyping
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Abstract Graphic */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-80 h-80"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main circle */}
              <motion.div 
                className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-4 right-8 w-16 h-16 rounded-lg bg-secondary/80"
                animate={{ 
                  rotate: [12, 22, 12],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-primary/40"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-accent/60"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Code-like lines */}
              <motion.div 
                className="absolute top-1/3 left-1/3 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div 
                  className="w-20 h-1 bg-background/80 rounded"
                  animate={{ width: [80, 60, 80] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="w-16 h-1 bg-background/60 rounded"
                  animate={{ width: [64, 80, 64] }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                ></motion.div>
                <motion.div 
                  className="w-24 h-1 bg-background/80 rounded"
                  animate={{ width: [96, 70, 96] }}
                  transition={{ 
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;