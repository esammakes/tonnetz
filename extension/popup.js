document.getElementById("generateBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const videoId = url.searchParams.get("v");

  if (!videoId) {
    document.getElementById("status").textContent =
      "Not a valid YouTube video.";
    return;
  }

  fetch(`http://localhost:5000/analyze/${videoId}`) // additional backend here
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("status").textContent = "Tonnetz ready!";
      console.log("Tonnetz Data:", data);
    })
    .catch((err) => {
      document.getElementById("status").textContent =
        "Error generating Tonnetz.";
      console.error(err);
    });
});
