// Pass the visitor's utm_source on to the waitlist form so sign-ups can be counted by source.
const source = new URLSearchParams(location.search).get("utm_source");
if (source) {
  for (const link of document.querySelectorAll('a[href^="https://tally.so/"]')) {
    const url = new URL(link.href);
    url.searchParams.set("utm_source", source);
    link.href = url;
  }
}
