const UseWindowUrl = (tag) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      tag
    )}`;
    window.open(googleSearchUrl, "_blank");
  };
  
  export default UseWindowUrl;
  