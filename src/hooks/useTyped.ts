import { useEffect, useState } from 'react';

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const useTyped = (phrases: string[], typingInterval = 70, pauseMS = 500, deletingInterval = 50) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedPhrase, setTypedPhrase] = useState('');

  // This function will be exported and by calling it we could set the last array string as the fixed placeholder when the user focus the input
  const focusInputHandler = () => {
    setTypedPhrase(phrases[phrases.length - 1]);
  };

  useEffect(() => {
    // Adds a delay when the user sees the typing animation for the first time
    if (isFirstRender) {
      setIsFirstRender(false);
      setPhase(Phase.Pausing);
    }

    // Stops the animation when the loop has reach the last string of the array
    if (typedPhrase === phrases[phrases.length - 1]) {
      return;
    }

    // Typing phase
    // Gets the new piece of phrase until its completed, then it sets the phase to Pausing
    if (phase === Phase.Typing) {
      const nextTypedPhrase = phrases[selectedIndex].slice(0, typedPhrase.length + 1);

      if (nextTypedPhrase === typedPhrase) {
        setPhase(Phase.Pausing);
        return;
      }

      const timeout = setTimeout(() => {
        setTypedPhrase(nextTypedPhrase);
      }, typingInterval);

      return () => clearTimeout(timeout);
    }

    // Same logic as in Typing phase but in the inverse sense
    if (phase === Phase.Deleting) {
      if (!typedPhrase) {
        const nextIndex = selectedIndex + 1;
        setSelectedIndex(phrases[nextIndex] ? nextIndex : 0);
        setPhase(Phase.Typing);
        return;
      }

      const nextRemaining = phrases[selectedIndex].slice(0, typedPhrase.length - 1);

      const timeout = setTimeout(() => {
        setTypedPhrase(nextRemaining);
      }, deletingInterval);

      return () => clearTimeout(timeout);
    }

    // Sets timeout between phases
    if (phase === Phase.Pausing) {
      const timeout = setTimeout(() => {
        setPhase(Phase.Deleting);
      }, pauseMS);

      return () => clearTimeout(timeout);
    }
  }, [typedPhrase, phase, selectedIndex]);

  return [typedPhrase, focusInputHandler] as const;
};

export default useTyped;
