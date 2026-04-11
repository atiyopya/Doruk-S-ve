import fs from 'fs';
import path from 'path';

// Read directly from the public/images folder — no need for the source directory
const publicImagesDir = "c:\\Users\\İsmail\\Desktop\\DORUK SÖVE KURUMSAL\\WEB SİTESİ\\DORUK SÖVE WEB SİTESİ KODLAR\\public\\images\\products";
const targetJson = "c:\\Users\\İsmail\\Desktop\\DORUK SÖVE KURUMSAL\\WEB SİTESİ\\DORUK SÖVE WEB SİTESİ KODLAR\\data\\products.json";

function toProductName(filename) {
    // Remove extension, replace hyphens/underscores with spaces for display
    return path.parse(filename).name;
}

function generateProducts() {
    const products = [];
    let idCounter = 1;

    // Expected structure: publicImagesDir / <main-category> / <subcategory> / <file>
    // e.g. public/images/products/uv-panel/AHŞAP DESEN/AD-001.png

    if (!fs.existsSync(publicImagesDir)) {
        console.error("ERROR: Public images directory not found:", publicImagesDir);
        process.exit(1);
    }

    // Map folder names to category labels
    const categoryMap = {
        "uv-panel": "UV BASKI PANELLER",
        "sove": "SÖVE",
        "stropiver": "STROPİYER",
    };

    const mainDirs = fs.readdirSync(publicImagesDir).filter(d =>
        fs.statSync(path.join(publicImagesDir, d)).isDirectory()
    );

    mainDirs.forEach(mainDir => {
        const category = categoryMap[mainDir.toLowerCase()] || mainDir.toUpperCase();
        const mainDirPath = path.join(publicImagesDir, mainDir);

        const entries = fs.readdirSync(mainDirPath);

        entries.forEach(entry => {
            const entryPath = path.join(mainDirPath, entry);
            const stat = fs.statSync(entryPath);

            if (stat.isDirectory()) {
                // Has subcategories
                const subcategory = entry;
                const files = fs.readdirSync(entryPath);

                files.sort().forEach(file => {
                    const ext = path.extname(file).toLowerCase();
                    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                        const baseName = path.parse(file).name;
                        products.push({
                            id: (idCounter++).toString(),
                            name: `${subcategory} - ${baseName}`,
                            category: category,
                            subcategory: subcategory,
                            image: `/images/products/${mainDir}/${subcategory}/${file}`
                        });
                    }
                });
            } else {
                // File directly inside main category (no subcategory)
                const ext = path.extname(entry).toLowerCase();
                if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                    const baseName = path.parse(entry).name;
                    products.push({
                        id: (idCounter++).toString(),
                        name: baseName,
                        category: category,
                        subcategory: null,
                        image: `/images/products/${mainDir}/${entry}`
                    });
                }
            }
        });
    });

    // Add catalog entries
    const catalogs = [
        { name: "DORUK SÖVE KATALOG 1", file: "/catalogs/KATALOG 1.pdf" },
        { name: "DORUK SÖVE KATALOG 2", file: "/catalogs/KATALOG 2.pdf" },
        { name: "DORUK SÖVE - ÜRÜN KATALOĞU", file: "/catalogs/Doruk-Sove.pdf" },
        { name: "DORUK-01", file: "/catalogs/Doruk-01.pdf" }
    ];

    catalogs.forEach(cat => {
        products.push({
            id: (idCounter++).toString(),
            name: cat.name,
            category: "KATALOG",
            image: "/images/placeholder.jpg",
            file: cat.file
        });
    });

    fs.writeFileSync(targetJson, JSON.stringify(products, null, 2), 'utf-8');
    console.log(`✅ Successfully generated ${products.length} products to ${targetJson}`);

    // Print a small summary per category
    const summary = {};
    products.forEach(p => {
        if (!summary[p.category]) summary[p.category] = 0;
        summary[p.category]++;
    });
    console.log("Summary:");
    Object.entries(summary).forEach(([cat, count]) => console.log(`  ${cat}: ${count} products`));
}

generateProducts();
