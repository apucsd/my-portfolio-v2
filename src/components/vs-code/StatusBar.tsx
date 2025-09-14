'use client';

import { motion } from 'framer-motion';
import { 
  GitBranch, 
  AlertCircle, 
  CheckCircle, 
  Zap,
  Bell,
  Wifi,
  Code,
  Globe,
  Minus
} from 'lucide-react';
import { BsCursorText } from 'react-icons/bs';

export default function StatusBar() {
  const leftItems = [
    { icon: GitBranch, text: 'main', color: 'text-white' },
    { icon: AlertCircle, text: '0', color: 'text-[#f14c4c]' },
    { icon: CheckCircle, text: '0', color: 'text-[#89d185]' },
  ];

  const rightItems = [
    { text: 'Prettier', icon: Zap },
    { text: 'TypeScript React', icon: Code },
    { text: 'UTF-8', icon: Globe },
    { text: 'LF', icon: Minus },
    { text: 'Ln 18, Col 7', icon: BsCursorText },
    { icon: Bell },
    { icon: Wifi },
  ];

  return (
    <motion.div 
      className="h-6 bg-[#007acc] text-white text-xs flex justify-between items-center px-2"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left side */}
      <div className="flex items-center space-x-2">
        {leftItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-1 cursor-pointer hover:bg-[#005a9e] px-2 py-1 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            {item.icon && <item.icon size={12} className={item.color} />}
            {item.text && <span>{item.text}</span>}
          </motion.div>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2">
        {rightItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-1 cursor-pointer hover:bg-[#005a9e] px-2 py-1 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
          >
            {item.icon && <item.icon size={12} />}
            {item.text && <span>{item.text}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
