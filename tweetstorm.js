
const getTextFormated = (subText) => {
  const dots = ['"',"'",'.', ';', ',', ':', '!', '?'];
  let dotIndex = 0;

  return function getNextDot(index) {
    const nextIndex = subText.indexOf(dots[dotIndex], index);
    let nextDot = -1;

    // if found
    if (nextIndex !== -1) {
      // check if there are next occurrences
      nextDot = getNextDot(nextIndex + 1);

    // if doesn't found
    } else if (index === 0 && dotIndex < dots.length - 1) {
      // find with another kind of dot
      dotIndex += 1;
      nextDot = getNextDot(index);

    }

    // return the last occurrence
    if (nextDot !== -1) {
      const endIndex = (typeof nextDot === 'object') ? nextDot.endIndex : nextDot;

      return {
        startIndex: index, 
        endIndex,
      }
    
    // return first occurrence
    } else if (nextIndex !== -1){
      
      return {
        startIndex: index,
        endIndex: nextIndex + 1,
      }

    } else {
      return -1;
    }
  }(0);
}

const createTweets = (text) => {
  const limit = 137;
  const characterLenght = text.length;
  let currentIndex = 0;

  return { 
    next() {

      if (currentIndex > characterLenght) {
        return false;
      }
      
      const subText = text.substr(currentIndex, limit);
      const { endIndex } = getTextFormated(subText);

      const tweet = text.substr(currentIndex, endIndex || limit);
      currentIndex += endIndex || limit;
      
      return tweet;
    }
  }
}

module.exports = {
  getTextFormated,
  createTweets,
}