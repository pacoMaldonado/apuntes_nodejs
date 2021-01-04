function seRompe() {
  return 3 + z;
}
try {
  seRompe();
} catch (error) {
  console.log("Vaya, algo se ha roto...");
  console.error(error.message);
  console.error("No te preocupes lo capturamos");
}
