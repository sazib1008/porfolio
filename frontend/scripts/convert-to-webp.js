import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

async function convertPngToWebp() {
  console.log(`Scanning assets directory: ${assetsDir}...`);

  try {
    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
    });

    console.log(`Found ${imageFiles.length} image files to convert.`);

    for (const file of imageFiles) {
      const inputPath = path.join(assetsDir, file);
      const outputName = `${path.basename(file, path.extname(file))}.webp`;
      const outputPath = path.join(assetsDir, outputName);

      console.log(`Converting ${file} -> ${outputName}...`);
      
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`Successfully converted ${file} to WebP.`);
    }

    console.log('All image conversions completed!');
  } catch (error) {
    console.error('Error during image conversion:', error);
  }
}

convertPngToWebp();
