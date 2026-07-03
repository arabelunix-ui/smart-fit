const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    console.log("Lancement du navigateur...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    // Résolution idéale pour les Carrousels LinkedIn (Carré 1:1)
    await page.setViewport({ width: 1080, height: 1080 });

    console.log("Navigation vers http://localhost:3000/presentation-errors...");
    await page.goto('http://localhost:3000/presentation-errors', { waitUntil: 'networkidle2' });

    const outputDir = './linkedin_slides_square';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const numSlides = 23;
    for (let i = 0; i < numSlides; i++) {
      const filename = `${outputDir}/slide_${String(i + 1).padStart(2, '0')}.png`;
      console.log(`Capture du slide ${i + 1}/${numSlides}...`);
      
      // Attendre que l'animation "fadeIn" soit terminée (0.4s)
      await new Promise(r => setTimeout(r, 600));
      
      await page.screenshot({ path: filename });
      
      // Appui sur la flèche droite pour passer au slide suivant
      if (i < numSlides - 1) {
        await page.keyboard.press('ArrowRight');
      }
    }

    await browser.close();
    console.log("✅ Terminé ! Tous les slides sont dans le dossier : linkedin_slides");
  } catch (error) {
    console.error("Erreur lors de la capture :", error);
    process.exit(1);
  }
})();
