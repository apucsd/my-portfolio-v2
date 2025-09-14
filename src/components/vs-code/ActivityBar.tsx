'use client';

import { motion } from 'framer-motion';
import { 
  Files, 
  Search, 
  GitBranch, 
  Play, 
  Package, 
  Settings,
  User
} from 'lucide-react';

const activities = [
  { icon: Files, name: 'Explorer', active: true },
  { icon: Search, name: 'Search', active: false },
  { icon: GitBranch, name: 'Source Control', active: false },
  { icon: Play, name: 'Run and Debug', active: false },
  { icon: Package, name: 'Extensions', active: false },
];

export default function ActivityBar() {
  return (
    <div className="w-12 h-full bg-[#2d2d30] border-r border-[#3e3e42] flex flex-col">
      {/* Main activities */}
      <div className="flex-1 py-2">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.name}
            className={`w-12 h-12 flex items-center justify-center cursor-pointer relative group ${
              activity.active 
                ? 'text-white bg-[#37373d] border-l-2 border-[#007acc]' 
                : 'text-[#cccccc] hover:text-white'
            }`}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: activity.active ? '#37373d' : '#3e3e42'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <activity.icon size={20} />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-[#1e1e1e] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
              {activity.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom activities */}
      <div className="pb-2">
        <motion.div
          className="w-12 h-12 flex items-center justify-center cursor-pointer text-[#cccccc] hover:text-white hover:bg-[#3e3e42] rounded transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <User size={20} />
        </motion.div>
        
        <motion.div
          className="w-12 h-12 flex items-center justify-center cursor-pointer text-[#cccccc] hover:text-white hover:bg-[#3e3e42] rounded transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <Settings size={20} />
        </motion.div>
      </div>
    </div>
  );
}