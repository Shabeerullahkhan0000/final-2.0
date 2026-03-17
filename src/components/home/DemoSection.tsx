import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ViewerCanvas } from '../ViewerCanvas';
import { LogoMark } from '../brand/LogoMark';
import { cn } from '../../lib/utils';

export const DemoSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile && /\.(dwg|dxf|pdf)$/i.test(droppedFile.name)) {
        handleFileSelect(droppedFile);
      }
    }
  };

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && /\.(dwg|dxf|pdf)$/i.test(selectedFile.name)) {
      handleFileSelect(selectedFile);
    }
  };

  return (
    <section id="demo" className="bg-surface py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-20"
        >
          <div className="font-mono text-sm tracking-wider text-accent uppercase">
            LIVE DEMO
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-primary">
            Try it yourself — no account needed
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Drop any DWG, DXF, or PDF file below. 
            Your file never leaves your browser.
          </p>
        </motion.div>

        <div 
          className={cn(
            "relative max-w-4xl mx-auto min-h-[480px] p-12 lg:p-16 rounded-3xl border-2 transition-all duration-200",
            "grid place-items-center",
            dragActive ? "border-accent bg-accent-subtle scale-[1.02]" : "border-border-subtle bg-elevated"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {isLoading ? (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Opening {file?.name}
                </h3>
                <Badge variant="accent" className="font-mono">
                  {file?.name.match(/\.(dwg|dxf|pdf)$/i)?.[1]?.toUpperCase()}
                </Badge>
              </div>
            </div>
          ) : file ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                Ready to view
              </h3>
              <Badge variant="accent" className="font-mono mb-8">
                {file.name.match(/\.(dwg|dxf|pdf)$/i)?.[1]?.toUpperCase()}
              </Badge>
              <div className="w-full h-64 bg-[#0D0F14] rounded-2xl border-2 border-border-subtle overflow-hidden">
                <ViewerCanvas />
              </div>
            </div>
          ) : (
            <div className="space-y-8 text-center">
              <LogoMark className="w-16 h-16 text-accent mx-auto" />
              <div>
                <h3 className="text-3xl lg:text-4xl font-display font-black text-text-primary mb-4">
                  Drop your CAD file here
                </h3>
                <p className="text-lg text-text-secondary mb-8">
                  or
                </p>
                <Button size="lg" onClick={handleBrowse}>
                  Browse files
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="accent" className="font-mono">DWG</Badge>
                <Badge variant="accent" className="font-mono">DXF</Badge>
                <Badge variant="accent" className="font-mono">PDF</Badge>
              </div>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".dwg,.dxf,.pdf"
          className="hidden"
          onChange={handleFileInput}
        />
      </div>
    </section>
  );
};
