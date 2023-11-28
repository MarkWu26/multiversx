// NewModalComponent.tsx
import React from 'react';
import { WalletConnectQRCode } from './walletconnect-qr-code';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog';

interface NewModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  walletConnectUri: string | null; // Adjust the type based on your actual data
}

export const NewModalComponent: React.FC<NewModalComponentProps> = ({ isOpen, onClose, walletConnectUri }) => {
    console.log('am i open? ', isOpen)
  return (
    // Your modal component structure here
    <Dialog open={isOpen} /* onOpenChange={onCloseComplete} */>
      
      <DialogContent className="max-w-xs sm:max-w-lg bg-white dark:bg-zinc-950 p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Login Using xPortal App</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 overflow-y-auto max-h-[calc(100vh-160px)] p-6 pb-8">
          {/* <LoginComponent isOpen={isOpen} setIsOpen={setIsOpen}/> */} hello world
        </div>
      </DialogContent>
    </Dialog>
  );
};