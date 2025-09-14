

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  VscFolder,
  VscFolderOpened,
  VscJson,
  VscLock,
  VscMarkdown,
  VscFileMedia,
} from "react-icons/vsc";
import { DiCss3, DiHtml5, DiGit } from "react-icons/di";
import { SiTypescript, SiEslint, SiVite } from "react-icons/si";
import { FaNpm, FaFont } from "react-icons/fa";
import { ChevronDown, ChevronRight } from 'lucide-react';


interface FileItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  icon?: any;
  isOpen?: boolean;
}



const fileStructure: FileItem[] = [
  { name: 'node_modules', type: 'folder', icon: VscFolder, children: [] },
  { name: 'public', type: 'folder', icon: VscFolder, children: [] },
  {
    name: 'src',
    type: 'folder',
    icon: VscFolderOpened,
    isOpen: true,
    children: [
      {
        name: 'assets',
        type: 'folder',
        icon: VscFolder,
        children: [
          { name: 'images', type: 'folder', icon: VscFileMedia },
          { name: 'fonts', type: 'folder', icon: FaFont },
          { name: 'styles', type: 'folder', icon: DiCss3 },
        ],
      },
      {
        name: 'components',
        type: 'folder',
        icon: VscFolderOpened,
        isOpen: true,
        children: [
          {
            name: 'ui',
            type: 'folder',
            icon: VscFolder,
            children: [
              { name: 'Button.tsx', type: 'file', icon: SiTypescript },
              { name: 'Card.tsx', type: 'file', icon: SiTypescript },
            ],
          },
          { name: 'About.tsx', type: 'file', icon: SiTypescript },
        ],
      },
      { name: 'App.tsx', type: 'file', icon: SiTypescript },
      { name: 'main.tsx', type: 'file', icon: SiTypescript },
      { name: 'vite-env.d.ts', type: 'file', icon: SiTypescript },
      { name: 'index.css', type: 'file', icon: DiCss3 },
    ],
  },
  { name: '.gitignore', type: 'file', icon: DiGit },
  { name: 'eslint.config.js', type: 'file', icon: SiEslint },
  { name: 'index.html', type: 'file', icon: DiHtml5 },
  { name: 'package.json', type: 'file', icon: FaNpm },
  { name: 'package-lock.json', type: 'file', icon: VscLock },
  { name: 'pnpm-lock.yaml', type: 'file', icon: VscLock },
  { name: 'README.md', type: 'file', icon: VscMarkdown },
  { name: 'tsconfig.app.json', type: 'file', icon: VscJson },
  { name: 'tsconfig.json', type: 'file', icon: VscJson },
  { name: 'tsconfig.node.json', type: 'file', icon: VscJson },
  { name: 'vite.config.ts', type: 'file', icon: SiVite },
];


function FileTreeItem({ item, depth = 0 }: { item: FileItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(item.isOpen || false);

  return (
    <div>
      <motion.div
        className={`flex items-center py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer text-[#cccccc] hover:text-white group`}
        style={{ paddingLeft: `${depth * 10 + 8}px` }}
      
        onClick={() => item.type === 'folder' && setIsOpen(!isOpen)}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: depth * 0.05, duration: 0.2 }}
      >
        {item.type === 'folder' && (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={16} className="mr-1" />
          </motion.div>
        )}
        {item.type === 'file' && <div className="w-4 mr-1" />}
        
        <item.icon size={16} className={`mr-2 ${item.type === 'folder' ? 'text-[#dcb67a]' : 'text-[#519aba]'}`} />
        <span className="text-sm truncate">{item.name}</span>
        
       
      </motion.div>

      <AnimatePresence>
        {item.type === 'folder' && isOpen && item.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            {item.children.map((child, index) => (
              <FileTreeItem key={`${child.name}-${index}`} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SideBar() {
  return (
    <div className="w-64 h-full bg-[#252526] border-r border-[#3e3e42] flex flex-col">
      {/* Header */}
      <motion.div 
        className="p-3 border-b border-[#3e3e42]"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-[#cccccc] text-sm font-mono uppercase tracking-wide">Explorer</h2>
        <div className="flex items-center mt-2">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <ChevronDown size={16} className="text-[#cccccc] mr-1" />
            <span className="text-[#cccccc] text-sm font-mono font-bold">PORTFOLIO-REACT</span>
          </motion.div>
        </div>
      </motion.div>

      {/* File tree */}
      <div className="flex-1 overflow-y-auto py-2">
        {fileStructure.map((item, index) => (
          <FileTreeItem key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}