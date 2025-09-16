'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Preload modules to avoid import delays
let THREE_MODULE = null;
let VANTA_MODULE = null;
let moduleLoadingPromise = null;

const preloadModules = () => {
  if (moduleLoadingPromise) return moduleLoadingPromise;
  
  moduleLoadingPromise = Promise.all([
    import('three').then(module => { THREE_MODULE = module; return module; }),
    import('vanta/dist/vanta.net.min').then(module => { VANTA_MODULE = module; return module; })
  ]).catch(error => {
    console.error('Failed to preload Vanta modules:', error);
    moduleLoadingPromise = null; // Reset on error to allow retry
  });
  
  return moduleLoadingPromise;
};

// Start preloading immediately when module loads
if (typeof window !== 'undefined') {
  preloadModules();
}

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const initVanta = useCallback(async () => {
    try {
      // Use preloaded modules or load them if not ready
      const [THREE, NET] = await (moduleLoadingPromise || preloadModules());
      
      if (vantaRef.current && !vantaEffect) {
        // Ensure THREE is properly configured for Vanta compatibility
        const ThreeJS = THREE || THREE_MODULE;
        
        const effect = (NET || VANTA_MODULE).default({
          el: vantaRef.current,
          THREE: ThreeJS,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x77f07f,
          color2: 0x77f07f,
          backgroundColor: 0x3a2f6b,
          points: 14.00,
          maxDistance: 21.00,
          showDots: true
        });
        
        setVantaEffect(effect);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Failed to load Vanta:', error);
      setIsLoading(false);
    }
  }, [vantaEffect]);

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined') {
      // Use requestAnimationFrame for better performance timing
      const initFrame = requestAnimationFrame(() => {
        initVanta();
      });
      
      return () => cancelAnimationFrame(initFrame);
    }

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Fallback background that shows while Vanta is loading */}
      {isLoading && (
        <div 
          style={{ 
            width: '100%', 
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            background: 'linear-gradient(135deg, #3a2f6b 0%, #2a1f5b 100%)',
            opacity: isLoading ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      )}
      
      {/* Vanta background container */}
      <div 
        ref={vantaRef} 
        style={{ 
          width: '100%', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: !isLoading ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default VantaBackground;