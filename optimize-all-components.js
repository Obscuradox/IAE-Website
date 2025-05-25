const fs = require('fs');
const path = require('path');

// Function to update component files with WebP support and responsive typography
function updateComponent(filePath, updates) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    updates.forEach(update => {
      if (update.search && update.replace) {
        content = content.replace(new RegExp(update.search, 'g'), update.replace);
      }
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Update FeaturesSection
const featuresUpdates = [
  {
    search: "'/images/features/([^']+)\\.jpg'",
    replace: "'/images/features/$1.webp'"
  },
  {
    search: 'src="/images/features/([^"]+)\\.jpg"',
    replace: 'src="/images/features/$1.webp"'
  },
  {
    search: 'className="text-\\[#151412\\] font-euclid-square text-2xl font-bold leading-tight uppercase"',
    replace: 'className="text-[#151412] font-euclid-square font-bold leading-tight uppercase" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}'
  },
  {
    search: 'className="text-white font-euclid-square text-2xl font-bold leading-tight uppercase"',
    replace: 'className="text-white font-euclid-square font-bold leading-tight uppercase" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}'
  }
];

// Update LocationsSection
const locationsUpdates = [
  {
    search: "'/images/locations/([^']+)\\.jpg'",
    replace: "'/images/locations/$1.webp'"
  },
  {
    search: 'src="/images/locations/([^"]+)\\.jpg"',
    replace: 'src="/images/locations/$1.webp"'
  },
  {
    search: 'className="text-black font-euclid-square text-xl sm:text-2xl md:text-3xl lg:text-section-title-desktop font-light leading-tight"',
    replace: 'className="text-black font-euclid-square font-light leading-tight" style={{ fontSize: "var(--font-size-section-title)" }}'
  }
];

// Update ScheduleSection
const scheduleUpdates = [
  {
    search: 'className="text-black font-euclid-square text-xl sm:text-2xl md:text-3xl lg:text-section-title-desktop font-light leading-tight"',
    replace: 'className="text-black font-euclid-square font-light leading-tight" style={{ fontSize: "var(--font-size-section-title)" }}'
  },
  {
    search: 'className="text-black font-euclid-square text-sm leading-tight"',
    replace: 'className="text-black font-euclid-square leading-tight text-responsive-body"'
  }
];

// Update FooterSection
const footerUpdates = [
  {
    search: 'className="text-white font-golos text-sm leading-tight"',
    replace: 'className="text-white font-golos leading-tight text-responsive-small"'
  },
  {
    search: 'className="text-white font-golos text-base leading-tight"',
    replace: 'className="text-white font-golos leading-tight text-responsive-body"'
  }
];

// Apply updates
console.log('🚀 Updating components with WebP support and responsive typography...\n');

updateComponent('app/components/FeaturesSection.tsx', featuresUpdates);
updateComponent('app/components/LocationsSection.tsx', locationsUpdates);
updateComponent('app/components/ScheduleSection.tsx', scheduleUpdates);
updateComponent('app/components/FooterSection.tsx', footerUpdates);

console.log('\n🎉 Component updates complete!');
console.log('\n💡 Next steps:');
console.log('   • Test all components on mobile devices');
console.log('   • Verify WebP images are loading correctly');
console.log('   • Check responsive typography scaling');
console.log('   • Test anchor links functionality'); 