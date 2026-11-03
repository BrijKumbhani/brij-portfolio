import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        {...rest}
    >
        {children}
    </motion.div>
);

export default Reveal;
