import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface OptimizationConfig {
  inputDir: string;
  outputDir: string;
  formats: ('webp' | 'avif' | 'png')[];
  quality: number;
  maxWidth: number;
  maxHeight: number;
}

interface ImageStats {
  original: number;
  optimized: number;
  savings: number;
  format: string;
}

const config: OptimizationConfig = {
  inputDir: path.join(__dirname, '../public'),
  outputDir: path.join(__dirname, '../public'),
  formats: ['webp', 'avif', 'png'],
  quality: 80,
  maxWidth: 1200,
  maxHeight: 800,
};

class ImageOptimizer {
  private stats: Map<string, ImageStats[]> = new Map();

  async ensureOutputDir(): Promise<void> {
    try {
      await fs.access(config.outputDir);
    } catch {
      await fs.mkdir(config.outputDir, { recursive: true });
      console.log(`📁 Creado directorio: ${config.outputDir}`);
    }
  }

  async getImageFiles(): Promise<string[]> {
    try {
      const files = await fs.readdir(config.inputDir);
      return files.filter(file => 
        /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)
      );
    } catch (error) {
      console.error(`❌ Error leyendo directorio ${config.inputDir}:`, error);
      return [];
    }
  }

  async optimizeImage(filename: string): Promise<void> {
    const inputFile = path.join(config.inputDir, filename);
    const name = path.parse(filename).name;
    
    console.log(`🖼️  Procesando: ${filename}`);
    
    try {
      const image = sharp(inputFile);
      const metadata = await image.metadata();
      const originalStats = await fs.stat(inputFile);
      
      console.log(`   📏 Original: ${metadata.width}x${metadata.height} (${(originalStats.size / 1024).toFixed(1)}KB)`);
      

      let processedImage = image;
      if (metadata.width! > config.maxWidth || metadata.height! > config.maxHeight) {
        processedImage = image.resize(config.maxWidth, config.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        });
        console.log(`   ↳ Redimensionando a máximo ${config.maxWidth}x${config.maxHeight}`);
      }
      
      const imageStats: ImageStats[] = [];
      

      for (const format of config.formats) {
        const outputPath = path.join(config.outputDir, `${name}.${format}`);
        
        await this.processFormat(processedImage.clone(), format, outputPath);
        
        const optimizedStats = await fs.stat(outputPath);
        const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100);
        
        const stats: ImageStats = {
          original: originalStats.size,
          optimized: optimizedStats.size,
          savings,
          format
        };
        
        imageStats.push(stats);
        
        console.log(`   ✅ ${format.toUpperCase()}: ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings.toFixed(1)}% reducción)`);
      }
      
      this.stats.set(filename, imageStats);
      
    } catch (error) {
      console.error(`❌ Error procesando ${filename}:`, error);
    }
  }

  private async processFormat(image: sharp.Sharp, format: string, outputPath: string): Promise<void> {
    switch (format) {
      case 'webp':
        await image.webp({ quality: config.quality }).toFile(outputPath);
        break;
      case 'avif':
        await image.avif({ quality: config.quality }).toFile(outputPath);
        break;
      case 'png':
        await image.png({ 
          quality: config.quality,
          compressionLevel: 9,
          palette: true
        }).toFile(outputPath);
        break;
      default:
        throw new Error(`Formato no soportado: ${format}`);
    }
  }

  printSummary(): void {
    console.log('\n📊 RESUMEN DE OPTIMIZACIÓN');
    console.log('='.repeat(50));
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    let filesProcessed = 0;
    
    this.stats.forEach((imageStats, filename) => {
      console.log(`\n📄 ${filename}:`);
      
      imageStats.forEach(stat => {
        totalOriginal += stat.original;
        totalOptimized += stat.optimized;
        console.log(`   ${stat.format.toUpperCase()}: ${(stat.optimized / 1024).toFixed(1)}KB (${stat.savings.toFixed(1)}% reducción)`);
      });
      
      filesProcessed++;
    });
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100);
    
    console.log('\n🎯 TOTALES:');
    console.log(`   Archivos procesados: ${filesProcessed}`);
    console.log(`   Tamaño original: ${(totalOriginal / 1024).toFixed(1)}KB`);
    console.log(`   Tamaño optimizado: ${(totalOptimized / 1024).toFixed(1)}KB`);
    console.log(`   Ahorro total: ${(totalOriginal - totalOptimized) / 1024}KB (${totalSavings.toFixed(1)}%)`);
  }

  printInstructions(): void {
    console.log('\n📋 PRÓXIMOS PASOS:');
    console.log('1. Reemplaza las imágenes originales con las optimizadas');
    console.log('2. Actualiza las rutas en tu código:');
    console.log('   - Primera opción: .webp');
    console.log('   - Fallback: .png optimizado');
    console.log('3. Usa el hook useImageFormat() para detección automática');
    console.log(`4. Las imágenes están en: ${config.outputDir}`);
  }
}


async function main(): Promise<void> {
  console.log('🚀 Iniciando optimización de imágenes para Pygmalion...\n');
  
  const optimizer = new ImageOptimizer();
  
  try {
    await optimizer.ensureOutputDir();
    
    const imageFiles = await optimizer.getImageFiles();
    
    if (imageFiles.length === 0) {
      console.log('⚠️  No se encontraron imágenes para procesar en public/imgs/');
      return;
    }
    
    console.log(`🔍 Encontradas ${imageFiles.length} imágenes para procesar\n`);
    

    for (const file of imageFiles) {
      await optimizer.optimizeImage(file);
      console.log(''); // Línea en blanco
    }
    
    optimizer.printSummary();
    optimizer.printInstructions();
    
    console.log('\n✅ ¡Optimización completada exitosamente!');
    
  } catch (error) {
    console.error('❌ Error durante la optimización:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { ImageOptimizer, config };