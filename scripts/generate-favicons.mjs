import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function createIcoFromPngs(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type = 1
  header.writeUInt16LE(count, 4); // count

  let currentOffset = headerSize + dirEntrySize * count;
  const entries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color palette = 0
    entry.writeUInt8(0, 3); // reserved = 0
    entry.writeUInt16LE(1, 4); // color planes = 1
    entry.writeUInt16LE(32, 6); // bpp = 32
    entry.writeUInt32LE(item.buffer.length, 8); // image size
    entry.writeUInt32LE(currentOffset, 12); // offset

    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map(p => p.buffer)
  ]);
}

async function run() {
  const circle512Path = path.resolve('public/images/logo-circle-512.png');
  const sourceBuf = await fs.promises.readFile(circle512Path);

  // 1. Create standard PNG icons
  const icon512 = await sharp(sourceBuf).resize(512, 512).png().toBuffer();
  const icon192 = await sharp(sourceBuf).resize(192, 192).png().toBuffer();
  const icon180 = await sharp(sourceBuf).resize(180, 180).png().toBuffer();
  const icon48 = await sharp(sourceBuf).resize(48, 48).png().toBuffer();
  const icon32 = await sharp(sourceBuf).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(sourceBuf).resize(16, 16).png().toBuffer();

  // 2. Generate ICO file with 16, 32, 48 sizes
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);

  // Write to src/app/
  await fs.promises.writeFile('src/app/favicon.ico', icoBuffer);
  await fs.promises.writeFile('src/app/icon.png', icon512);
  await fs.promises.writeFile('src/app/apple-icon.png', icon180);

  // Write to public/
  await fs.promises.writeFile('public/favicon.ico', icoBuffer);
  await fs.promises.writeFile('public/icon.png', icon512);
  await fs.promises.writeFile('public/apple-icon.png', icon180);
  await fs.promises.writeFile('public/icon-192.png', icon192);
  await fs.promises.writeFile('public/icon-512.png', icon512);

  console.log('Successfully generated and placed all favicon & icon files!');
}

run().catch(console.error);
