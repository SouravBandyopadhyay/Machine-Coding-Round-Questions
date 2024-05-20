import { useState } from "react";

const useCopy = () => {
  const [copiedText, setCopiedText] = useState(null);
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error(`Failed Copying ${text}`);
      setCopiedText(null);
    }
  };
  return [copiedText, copy];
};
export default useCopy;
