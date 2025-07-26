//wait for the page to load
window.addEventListener("load", () => {
  const waitForPlayer = setInterval(() => {
    const controls = document.querySelector("#top-level-buttons-computed");
    if (controls) {
      clearInterval(waitForPlayer);
      if (!document.getElementById("tonnetz-btn")) {
        const btn = document.createElement("button");
        btn.id = "tonnetz-btn";
        btn.innerText = "🎶 Generate Tonnetz";
        btn.style.marginLeft = "10px";
        btn.style.padding = "8px";
        btn.onclick = () => {
          const videoId = new URLSearchParams(window.location.search).get("v");
          fetch(`http://localhost:5000/analyze/${videoId}`)
            .then((res) => res.json())
            .then((data) => {
              console.log("Received Tonnetz:", data);
              alert("Tonnetz ready! Open DevTools to see JSON.");
              //triggered logic...
              // 1. get curr YT videoID
              // 2. call http://localhost:5000/analyze/${videoId}
              // 3. show feedback (console log, alert, overlay etc.)

            });
        };
        controls.appendChild(btn);
      }
    }
  }, 1000);
});
