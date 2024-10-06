const calculateReadTime = (content) => {
    let readTime;
    try {
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        readTime = Math.ceil(words / wordsPerMinute);
    } catch (err) {
        readTime = 0
    }
  
    return readTime;
}

export default calculateReadTime;