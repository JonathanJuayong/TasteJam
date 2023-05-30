import {ReactElement, useState} from "react";

export default function useElementTransition(elements: ReactElement[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const showNextElement = () => {
    if (activeIndex < elements.length - 1) {
      return setActiveIndex(prev => prev + 1)
    }
  }

  const showPreviousElement = () => {
    if (activeIndex > 0) {
      return setActiveIndex(prev => prev - 1)
    }
  }

  return {
    currentElement: elements[activeIndex],
    activeIndex,
    showNextElement,
    showPreviousElement
  }
}
