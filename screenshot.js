const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const dir = './public/presentation-linkedin';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  
  // LinkedIn Carousel optimized size (Square 1080x1080)
  await page.setViewport({ width: 1080, height: 1080 });

  console.log("Navigating to presentation page...");
  try {
    await page.goto('http://localhost:3000/presentation', { waitUntil: 'networkidle2', timeout: 15000 });
  } catch (e) {
    console.error("Error navigating.", e);
    await browser.close();
    process.exit(1);
  }

  // Hide header and footer (navigation elements)
  await page.addStyleTag({ content: 'header, footer { display: none !important; }' });

  // Number of slides is 19
  const numSlides = 19;

  for (let i = 0; i < numSlides; i++) {
    console.log(`Taking screenshot of slide ${i + 1} for LinkedIn...`);
    
    // Wait for animations
    await new Promise(r => setTimeout(r, 800));
    
    const slideNumberStr = String(i + 1).padStart(2, '0');
    await page.screenshot({ path: `${dir}/slide-${slideNumberStr}.png` });
    
    // Press right arrow to go to next slide
    if (i < numSlides - 1) {
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 600));
    }
  }

  await browser.close();
  console.log("Done! LinkedIn optimized screenshots saved to " + dir);
})();
