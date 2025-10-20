// script.js
function initMap() {
  // Define restricted bounds for Bucharest
  const bucharestBounds = {
    north: 44.55,
    south: 44.32,
    west: 25.95,
    east: 26.25,
  };

  // Initialize the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.4268, lng: 26.1025 },
    zoom: 12,
    restriction: {
      latLngBounds: bucharestBounds,
      strictBounds: true,
    },
    mapTypeId: "terrain",
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
  });

  // ---- KML LAYER SECTION ----
  // Make sure your .KML file is publicly accessible!
  // Example: hosted on GitHub, Google Drive (public), or your ASFE site.
  const kmlUrl = "https://raw.githubusercontent.com/MarinescuRobert/WebsiteRecrutariASFE/refs/heads/main/Harta_Bucurestiul_Energetic.kml";

  const kmlLayer = new google.maps.KmlLayer({
    url: kmlUrl,
    map: map,
    preserveViewport: false, // auto-center to KML content
    suppressInfoWindows: false, // allow popups from KML
  });

  kmlLayer.addListener("status_changed", () => {
    if (kmlLayer.getStatus() !== "OK") {
      console.error("KML failed to load:", kmlLayer.getStatus());
    }
  });
}
