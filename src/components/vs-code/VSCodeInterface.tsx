
import ActivityBar from './ActivityBar';
import SideBar from './SideBar';
import EditorArea from './EditorArea';
import StatusBar from './StatusBar';
import { VscVscode } from 'react-icons/vsc';

export default function VSCodeInterface() {
  return (
    <div
    
    id='about'
    className="hidden xl:block relative  font-jetbrains dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)] h-[100vh] overflow-hidden">
      <div className="sticky bg-transparent top-0 h-[100vh] w-full flex items-center justify-center">
        <div className="w-full max-w-[80vw] h-[100%] relative">
          {/* Main panel */}
          <div className="relative z-10 w-full h-full flex flex-col overflow-hidden rounded-lg shadow-2xl border border-[#3e3e42]">
            {/* Title Bar */}
            <div className="grid grid-cols-3 bg-[#1e1e1e] border-b border-[#3e3e42] items-center px-4 py-2 h-10 relative">
              <div className="flex items-center space-x-4">
                <VscVscode className="text-[#0078d4]" size={20} />
                <span className="text-sm cursor-pointer text-gray-300">File</span>
                <span className="text-sm cursor-pointer text-gray-300">Edit</span>
                <span className="text-sm cursor-pointer text-gray-300">View</span>
                <span className="text-sm cursor-pointer text-gray-300">Terminal</span>
                <span className="text-sm cursor-pointer text-gray-300">Help</span>
              </div>
              <div className="text-xs text-center text-gray-400">Apu Sutra Dhar - Portfolio</div>
              <div className="flex items-center justify-end space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#f1fa8c] hover:bg-[#f8ffa0] cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-[#50fa7b] hover:bg-[#5aff7d] cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-[#ff5555] hover:bg-[#ff6e6e] cursor-pointer"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex relative">
              <ActivityBar />
              <SideBar />
              <EditorArea />
            </div>

            {/* Status Bar */}
            <div className="h-12 bg-[#007acc] text-white text-xs flex items-center px-4">
              <StatusBar />
            </div>
          </div>

          {/* Background element */}
          <div className="absolute inset-0 bg-[#007acc]/10 -z-10 rounded-2xl" />
        </div>
      </div>

      {/* Next section */}
      <div className="absolute top-[100vh] left-0 w-full min-h-[200vh] bg-[#1a1a1a] z-10 pt-[100vh]">
        <div className="container mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Next Section</h2>
        </div>
      </div>
    </div>
  );
}