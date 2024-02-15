export default function parseImages(images: FileList) {
  const files = Array.from(images);
  const parsedImages: string[] = [];
  files.forEach((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      parsedImages.push(reader.result);
    };
  });
  return parsedImages;
}
