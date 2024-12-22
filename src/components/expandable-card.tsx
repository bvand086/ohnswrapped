'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  children: React.ReactNode;
  className?: string;
  expandedContent?: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ children, className, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`${className} overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div 
              className="flex justify-between cursor-pointer" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex-1">{children}</div>
              {expandedContent && (
                <motion.div 
                  className="ml-2"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              )}
            </div>
            {expandedContent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-white/20"
              >
                {expandedContent}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExpandableCard;

