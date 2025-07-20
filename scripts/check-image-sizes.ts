// scripts/check-image-sizes.ts
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ImageInfo {
  filename: string;
  size: number;
  sizeKB: number;
  sizeMB: number;
  extension: string;
  needsOptimization: boolean;
}

class ImageSizeChecker {
  private readonly inputDir: string;
  private readonly maxRecommendedSizeKB = 100; 

  constructor() {
    this.inputDir = path.join(__dirname, '../public');
  }

  async getImageFiles(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.inputDir);
      return files.filter(file => 
        /\.(jpg|jpeg|png|gif|bmp|tiff|webp|avif)$/i.test(file)
      );
    } catch (error) {
      console.error(`❌ Error leyendo directorio ${this.inputDir}:`, error);
      return [];
    }
  }

  async analyzeImage(filename: string): Promise<ImageInfo> {
    const filePath = path.join(this.inputDir, filename);
    const stats = await fs.stat(filePath);
    const extension = path.extname(filename).toLowerCase();
    const sizeKB = stats.size / 1024;
    const sizeMB = sizeKB / 1024;

    return {
      filename,
      size: stats.size,
      sizeKB,
      sizeMB,
      extension,
      needsOptimization: sizeKB > this.maxRecommendedSizeKB
    };
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes.toFixed(0)}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
  }

  getRecommendation(imageInfo: ImageInfo): string {
    const { sizeKB, extension } = imageInfo;
    
    if (sizeKB > 500) {
      return '🔴 CRÍTICO: Reduce inmediatamente';
    } else if (sizeKB > 200) {
      return '🟠 ALTO: Optimización recomendada';
    } else if (sizeKB > 100) {
      return '🟡 MEDIO: Considera optimizar';
    } else if (extension === '.png' && sizeKB > 50) {
      return '🔵 INFO: Convertir a WebP mejoraría rendimiento';
    } else {
      return '✅ ÓPTIMO: Tamaño adecuado';
    }
  }

  printReport(images: ImageInfo[]): void {
    console.log('📊 ANÁLISIS DE TAMAÑOS DE IMÁGENES');
    console.log('='.repeat(70));

    const sortedImages = [...images].sort((a, b) => b.size - a.size);
    
    console.log('\n📋 DETALLE POR IMAGEN:');
    console.log('-'.repeat(70));
    
    sortedImages.forEach((img, index) => {
      const sizeFormatted = this.formatSize(img.size);
      const recommendation = this.getRecommendation(img);
      
      console.log(`${index + 1}. ${img.filename}`);
      console.log(`   📏 Tamaño: ${sizeFormatted}`);
      console.log(`   📁 Tipo: ${img.extension}`);
      console.log(`   💡 Estado: ${recommendation}`);
      console.log('');
    });

    const totalSize = images.reduce((sum, img) => sum + img.size, 0);
    const largeImages = images.filter(img => img.sizeKB > 200);
    const optimizableImages = images.filter(img => img.needsOptimization);
    const pngImages = images.filter(img => img.extension === '.png');

    console.log('📈 ESTADÍSTICAS GENERALES:');
    console.log('-'.repeat(70));
    console.log(`📦 Total de imágenes: ${images.length}`);
    console.log(`💾 Tamaño total: ${this.formatSize(totalSize)}`);
    console.log(`📏 Tamaño promedio: ${this.formatSize(totalSize / images.length)}`);
    console.log(`🔴 Imágenes grandes (>200KB): ${largeImages.length}`);
    console.log(`⚠️  Requieren optimización: ${optimizableImages.length}`);
    console.log(`🖼️  Archivos PNG: ${pngImages.length}`);

    if (optimizableImages.length > 0) {
      const potentialSavings = optimizableImages.reduce((sum, img) => 
        sum + (img.size * 0.7), 0);
      
      console.log(`💰 Ahorro potencial: ~${this.formatSize(potentialSavings)} (estimado)`);
    }

    console.log('\n🎯 RECOMENDACIONES:');
    console.log('-'.repeat(70));
    
    if (optimizableImages.length > 0) {
      console.log('1. 🚀 Ejecutar optimización:');
      console.log('   pnpm optimize-images');
      console.log('');
    }
    
    if (pngImages.length > 0) {
      console.log('2. 🔄 Convertir PNG a WebP para mejor compresión');
      console.log('');
    }
    
    if (largeImages.length > 0) {
      console.log('3. 📐 Redimensionar imágenes grandes antes de optimizar');
      console.log('');
    }
    
    console.log('4. 🔧 Implementar lazy loading para imágenes no críticas');
    console.log('5. 📱 Considerar diferentes tamaños para diferentes dispositivos');
  }

  printPriorityActions(images: ImageInfo[]): void {
    const criticalImages = images.filter(img => img.sizeKB > 500);
    const highPriorityImages = images.filter(img => img.sizeKB > 200 && img.sizeKB <= 500);
    
    if (criticalImages.length > 0 || highPriorityImages.length > 0) {
      console.log('\n🚨 ACCIONES PRIORITARIAS:');
      console.log('='.repeat(70));
      
      if (criticalImages.length > 0) {
        console.log('\n🔴 CRÍTICO - Optimizar INMEDIATAMENTE:');
        criticalImages.forEach(img => {
          console.log(`   • ${img.filename} (${this.formatSize(img.size)})`);
        });
      }
      
      if (highPriorityImages.length > 0) {
        console.log('\n🟠 ALTA PRIORIDAD - Optimizar pronto:');
        highPriorityImages.forEach(img => {
          console.log(`   • ${img.filename} (${this.formatSize(img.size)})`);
        });
      }
      
      console.log('\n💡 Comando para optimizar:');
      console.log('   pnpm optimize-images');
    }
  }
}

async function main(): Promise<void> {
  console.log('🔍 Verificando tamaños de imágenes en Pygmalion...\n');
  
  const checker = new ImageSizeChecker();
  
  try {
    const imageFiles = await checker.getImageFiles();
    
    if (imageFiles.length === 0) {
      console.log('⚠️  No se encontraron imágenes en public/imgs/');
      return;
    }
    
    console.log(`📁 Analizando ${imageFiles.length} imágenes...\n`);
    
    const imageInfos: ImageInfo[] = [];
    
    for (const file of imageFiles) {
      const info = await checker.analyzeImage(file);
      imageInfos.push(info);
    }
    
    checker.printReport(imageInfos);
    checker.printPriorityActions(imageInfos);
    
    console.log('\n✅ Análisis completado');
    
  } catch (error) {
    console.error('❌ Error durante el análisis:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { ImageSizeChecker };