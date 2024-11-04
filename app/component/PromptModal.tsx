interface PromptModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: () => void;
    initialPrompt: string;
  }
  
  export default function PromptModal({ 
    isOpen, 
    onClose, 
    onGenerate,
    initialPrompt
  }: PromptModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 w-[600px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Enhance Your Prompt</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select className="w-full p-2 border rounded-md">
                <option>Professional Writer</option>
                <option>Business Analyst</option>
                <option>Software Developer</option>
                <option>Marketing Expert</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Intent</label>
              <select className="w-full p-2 border rounded-md">
                <option>Explain</option>
                <option>Analyze</option>
                <option>Summarize</option>
                <option>Compare</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
              <select className="w-full p-2 border rounded-md">
                <option>Professional</option>
                <option>Casual</option>
                <option>Academic</option>
                <option>Friendly</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Context</label>
              <textarea 
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Add any additional context or requirements..."
              />
            </div>
          </div>
  
          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={onGenerate}
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
            >
              Generate Enhanced Prompt
            </button>               
          </div>
        </div>
      </div>
    );
  }