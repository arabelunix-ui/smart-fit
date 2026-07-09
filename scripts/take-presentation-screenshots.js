/**
 * Screenshot script for the /presentation page
 * Captures only the slide content (no header/footer) — LinkedIn square format
 */

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3001/presentation";
const OUTPUT_DIR = path.join(__dirname, "..", "public", "screenshots", "presentation-linkedin");

// Viewport width = 1200px; height will be calculated to make content exactly 1200px tall
const CONTENT_SIZE = 1200;

const SLIDES = [
  { index: 0,  label: "00-introduction" },
  { index: 1,  label: "01-probleme" },
  { index: 2,  label: "02-solution" },
  { index: 3,  label: "03-fonctionnalites-sportifs" },
  { index: 4,  label: "04-programmes-sur-mesure" },
  { index: 5,  label: "05-tracking-gps" },
  { index: 6,  label: "06-suivi-statistiques" },
  { index: 7,  label: "07-plan-nutritionnel" },
  { index: 8,  label: "08-mode-coach-pro" },
  { index: 9,  label: "09-profil-coach" },
  { index: 10, label: "10-outils-creation" },
  { index: 11, label: "11-analytiques-rapport" },
  { index: 12, label: "12-agenda-intelligent" },
  { index: 13, label: "13-intelligence-artificielle" },
  { index: 14, label: "14-communication" },
  { index: 15, label: "15-base-exercices" },
  { index: 16, label: "16-multilingue" },
  { index: 17, label: "17-marche" },
  { index: 18, label: "18-contact-cta" },
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

(async () => {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`📁 Output dir: ${OUTPUT_DIR}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // First pass: load at 1200×1200 to measure header & footer heights
  await page.setViewport({ width: CONTENT_SIZE, height: CONTENT_SIZE });
  console.log(`🌐 Opening ${BASE_URL} …`);
  await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 60000 });
  await sleep(1500);

  // Measure header and footer bounding boxes
  const { headerH, footerH } = await page.evaluate(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    return {
      headerH: header ? header.getBoundingClientRect().height : 0,
      footerH: footer ? footer.getBoundingClientRect().height : 0,
    };
  });

  const contentH = CONTENT_SIZE - headerH - footerH;
  console.log(`📐 Header: ${headerH}px | Footer: ${footerH}px | Content: ${CONTENT_SIZE}x${Math.round(contentH)}px`);
  console.log(`   → Crop clip: y=${Math.round(headerH)}, h=${Math.round(contentH)}\n`);

  // Adjust viewport so content zone is exactly CONTENT_SIZE tall (= square output)
  const totalH = Math.round(headerH + CONTENT_SIZE + footerH);
  await page.setViewport({ width: CONTENT_SIZE, height: totalH });
  await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 60000 });
  await page.click("body");
  await sleep(1500);

  // Clip region = content only (no header, no footer), square 1200×1200
  const clip = {
    x: 0,
    y: Math.round(headerH),
    width: CONTENT_SIZE,
    height: CONTENT_SIZE,
  };

  // Slide 0
  console.log(`📸 Slide 0: ${SLIDES[0].label}`);
  await page.screenshot({
    path: path.join(OUTPUT_DIR, `${SLIDES[0].label}.png`),
    clip,
  });
  console.log(`   ✅ Saved: ${SLIDES[0].label}.png`);

  // Slides 1–18
  for (let i = 1; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    console.log(`📸 Slide ${slide.index}: ${slide.label}`);
    await page.keyboard.press("ArrowRight");
    await sleep(800);
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `${slide.label}.png`),
      clip,
    });
    console.log(`   ✅ Saved: ${slide.label}.png`);
  }

  await browser.close();
  console.log(`\n🎉 Done! ${SLIDES.length} screenshots (${CONTENT_SIZE}×${CONTENT_SIZE}px, content only) saved to:\n   ${OUTPUT_DIR}`);
})();
