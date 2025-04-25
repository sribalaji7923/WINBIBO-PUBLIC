'use client';
import { useEffect, useRef, useCallback } from 'react';

export function useAndroidInstall() {
  const deferred = useRef(null);

 useEffect(() => {
   const handler = (e) => {
     e.preventDefault(); // stop Chrome’s mini-infobar
     deferred.current = e; // stash the event for later
   };
   window.addEventListener('beforeinstallprompt', handler);
   return () => window.removeEventListener('beforeinstallprompt', handler);
 }, []);


  const maybePrompt = useCallback(async () => {
    if (!deferred.current) return false;
    deferred.current.prompt();
    const { outcome } = await deferred.current.userChoice;
    deferred.current = null;
    return outcome === 'accepted';
  }, []);

  return maybePrompt;
}
