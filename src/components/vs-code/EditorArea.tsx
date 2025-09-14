

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, FileCode } from 'lucide-react';

const codeContent = `const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Passionate developer with a love for creating impactful solutions</p>
      
      <div>
        <h3>My Journey</h3>
        <p>
          My coding journey began in 2020 when I wrote my first line of code. What started as curiosity quickly 
          turned into a passion as I discovered the joy of bringing ideas to life through programming.
        </p>
        <p>
          I'm currently working as a Full Stack Developer at BDCalling IT Ltd, where I've been able to apply 
          my technical skills to real-world projects. This role has been instrumental in honing my abilities 
          in both frontend and backend development.
        </p>
        <p>
          I've recently completed my Diploma in Computer Science and Engineering, and I'm excited to 
          continue my academic journey by pursuing a BSc.
        </p>
      </div>
    </div>
  );
};

export default About;`;

const tabs = [
  { name: 'App.tsx', active: false, modified: false },
  { name: 'About.tsx', active: true, modified: true },
];

// Token types for syntax highlighting
interface Token {
  type: 'keyword' | 'string' | 'jsx' | 'function' | 'bracket' | 'text';
  value: string;
}

// Tokenize a line of code
function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  
  while (i < line.length) {
    const char = line[i];
    
    // Skip whitespace but preserve it
    if (char === ' ' || char === '\t') {
      let whitespace = '';
      while (i < line.length && (line[i] === ' ' || line[i] === '\t')) {
        whitespace += line[i];
        i++;
      }
      tokens.push({ type: 'text', value: whitespace });
      continue;
    }
    
    // Handle strings
    if (char === '"' || char === "'") {
      const quote = char;
      let string = quote;
      i++;
      while (i < line.length && line[i] !== quote) {
        string += line[i];
        i++;
      }
      if (i < line.length) {
        string += line[i];
        i++;
      }
      tokens.push({ type: 'string', value: string });
      continue;
    }
    
    // Handle JSX tags
    if (char === '<') {
      let jsx = '<';
      i++;
      while (i < line.length && line[i] !== '>') {
        jsx += line[i];
        i++;
      }
      if (i < line.length) {
        jsx += line[i];
        i++;
      }
      tokens.push({ type: 'jsx', value: jsx });
      continue;
    }
    
    // Handle brackets
    if ('{}()[]'.includes(char)) {
      tokens.push({ type: 'bracket', value: char });
      i++;
      continue;
    }
    
    // Handle words (keywords, functions, etc.)
    if (/[a-zA-Z_$]/.test(char)) {
      let word = '';
      while (i < line.length && /[a-zA-Z0-9_$]/.test(line[i])) {
        word += line[i];
        i++;
      }
      
      const keywords = ['export', 'const', 'return', 'div', 'h2', 'p', 'ul', 'li', 'className'];
      const functions = ['AboutMe'];
      
      if (keywords.includes(word)) {
        tokens.push({ type: 'keyword', value: word });
      } else if (functions.includes(word)) {
        tokens.push({ type: 'function', value: word });
      } else {
        tokens.push({ type: 'text', value: word });
      }
      continue;
    }
    
    // Handle other characters
    tokens.push({ type: 'text', value: char });
    i++;
  }
  
  return tokens;
}

// Render a token with appropriate styling
function renderToken(token: Token, index: number): JSX.Element {
  const className = {
    keyword: 'text-[#569cd6]',
    string: 'text-[#ce9178]',
    jsx: 'text-[#569cd6]',
    function: 'text-[#dcdcaa]',
    bracket: 'text-[#ffd700]',
    text: 'text-[#d4d4d4]'
  }[token.type];

  return (
    <span key={index} className={className}>
      {token.value}
    </span>
  );
}

export default function EditorArea() {
  const [currentLine, setCurrentLine] = useState(1);
  const [typedCode, setTypedCode] = useState('');

  useEffect(() => {
    // Typewriter effect for code
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeContent.length) {
        setTypedCode(codeContent.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update current line based on typed code
    const lines = typedCode.split('\n').length;
    setCurrentLine(lines);
  }, [typedCode]);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#1e1e1e]">
      {/* Tab Bar */}
      <motion.div 
        className="flex bg-[#2d2d30] border-b border-[#3e3e42]"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {tabs.map((tab, index) => (
          <motion.div
            key={tab.name}
            className={`flex items-center px-4 py-2 text-sm  border-r border-[#3e3e42] cursor-pointer group relative ${
              tab.active 
                ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]' 
                : 'text-[#cccccc] hover:text-white hover:bg-[#37373d]'
            }`}
            whileHover={{ backgroundColor: tab.active ? '#1e1e1e' : '#37373d' }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
          >
            <FileCode size={16} className="mr-2 text-[#519aba]" />
            <span>{tab.name}</span>
            {tab.modified && (
              <motion.div
                className="w-2 h-2 bg-white rounded-full ml-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            )}
            <motion.div
              className="ml-2 p-1 rounded hover:bg-[#3e3e42] opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={12} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Editor Content */}
      <div className="flex-1 flex">
        {/* Line Numbers */}
        <motion.div 
          className="w-12 bg-[#1e1e1e] text-[#858585] text-sm font-mono py-4 pr-2 text-right border-r border-[#3e3e42] select-none"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {Array.from({ length: Math.max(25, currentLine) }, (_, i) => (
            <motion.div
              key={i + 1}
              className={`leading-6 ${i + 1 === currentLine ? 'text-white' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i + 1) * 0.02 }}
            >
              {i + 1}
            </motion.div>
          ))}
        </motion.div>

        {/* Code Area */}
        <motion.div 
          className="flex-1 bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm p-4 overflow-auto leading-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="whitespace-pre-wrap">
            {typedCode.split('\n').map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                className="relative"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: lineIndex * 0.05 }}
              >
                {tokenizeLine(line).map((token, tokenIndex) => 
                  renderToken(token, tokenIndex)
                )}
                {lineIndex === currentLine - 1 && typedCode.length < codeContent.length && (
                  <motion.span
                    className="inline-block w-2 h-5 bg-white ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mini Map */}
      <motion.div 
        className="absolute right-0 top-12 w-16 h-64 bg-[#1e1e1e] border-l border-[#3e3e42] opacity-60 hover:opacity-100 transition-opacity"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="p-1">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="h-1 bg-[#3e3e42] mb-1 rounded"
              style={{ width: `${Math.random() * 80 + 20}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.02 + 0.7, duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}