import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image when component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []); // empty dependency array → runs once on mount

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Dog</h1>
      <img src={image} alt="A Random Dog" width="300" />
    </div>
  );
}

export default App;
