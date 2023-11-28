'use client';

import { FC, useState, useEffect } from 'react';
import { useLogin, useLogout } from '@useelven/core';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoginComponent } from './login-component';
import { useEffectOnlyOnUpdate } from '@/hooks/use-effect-only-on-update';
import axios from 'axios'

interface DiscordLoginProps {
  onClose?: () => void;
  onOpen?: () => void;
  url?: string;
}

export const DiscordLogin: FC<DiscordLoginProps> = ({
  onClose,
  onOpen,
  url
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, isLoggingIn, setLoggingInState } = useLogin();

  const { logout } = useLogout();

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      setIsOpen(false);
      onClose?.();
    }
  }, [isLoggedIn]);

  const onCloseComplete = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
      setTimeout(() => {
        setLoggingInState('error', '');
      }, 1000);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const [isStepTwo, setIsStepTwo] = useState(false)

  


  return (
   <>
      
        <a onClick={handleOpen} href={url} className="border border-[#464545] px-4 py-2 rounded-md hover:bg-[#3b3b40] hover:bg-opacity-70 transition-all ease-in-out duration-200 text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer">
          {isLoggingIn ? 'Connecting...' : 'Connect to Discord'}
        </a>
    
      
    </>
  );
};
