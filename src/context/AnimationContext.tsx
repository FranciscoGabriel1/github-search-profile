import { createContext, ReactNode, useContext, useState } from 'react';

interface AnimationContextValue {
  enabled: boolean;
  toggle: () => void;
}

const AnimationContext = createContext<AnimationContextValue | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const toggle = () => setEnabled(e => !e);
  return (
    <AnimationContext.Provider value={{ enabled, toggle }}>
      {children}
    </AnimationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAnimation() {
  const ctx = useContext(AnimationContext);
  if (!ctx) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return ctx;
}
