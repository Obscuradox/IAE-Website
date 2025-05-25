const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to get file size in KB
function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

// Function to convert images to WebP
async function convertToWebP(inputPath, outputPath) {
  const originalSize = getFileSizeInKB(inputPath);
  
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6 // Maximum compression effort
      })
      .toFile(outputPath);
    
    const webpSize = getFileSizeInKB(outputPath);
    const savings = Math.round(((originalSize - webpSize) / originalSize) * 100);
    
    return {
      filename: path.basename(inputPath),
      originalSize,
      webpSize,
      savings
    };
  } catch (error) {
    console.error(`   ❌ Error converting ${path.basename(inputPath)}:`, error.message);
    return null;
  }
}

// Function to process directory
async function processDirectory(dirPath) {
  console.log(`\n🔄 Converting images to WebP in: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`   ⚠️  Directory not found: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });
  
  if (imageFiles.length === 0) {
    console.log(`   ℹ️  No images found to convert in ${dirPath}`);
    return;
  }
  
  console.log(`   📁 Found ${imageFiles.length} images to convert`);
  
  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  let convertedCount = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(dirPath, `${nameWithoutExt}.webp`);
    
    const result = await convertToWebP(inputPath, outputPath);
    if (result) {
      console.log(`   ✅ ${result.filename} → ${nameWithoutExt}.webp: ${result.originalSize}KB → ${result.webpSize}KB (${result.savings}% smaller)`);
      totalOriginalSize += result.originalSize;
      totalWebpSize += result.webpSize;
      convertedCount++;
    }
  }
  
  if (convertedCount > 0) {
    const totalSavings = Math.round(((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100);
    console.log(`   📊 Total: ${totalOriginalSize}KB → ${totalWebpSize}KB (${totalSavings}% smaller)`);
  }
}

// Main conversion function
async function convertAllToWebP() {
  console.log('🚀 Converting all images to WebP format...\n');
  
  const directories = [
    'public/images/speakers',
    'public/images/activities', 
    'public/images/features',
    'public/images/locations',
    'public/images/packages'
  ];

  // Convert images in each directory
  for (const dir of directories) {
    await processDirectory(dir);
  }

  // Convert root level images
  await processDirectory('public/images');

  console.log('\n🎉 WebP conversion complete!');
  console.log('\n💡 Next steps:');
  console.log('   • Update components to use .webp extensions');
  console.log('   • Add fallback support for older browsers');
  console.log('   • Test loading performance');
}

// Run the conversion
convertAllToWebP().catch(console.error); 