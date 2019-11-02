export default interface UploadedImage extends File {
    file: File,
    preview: string,
    exifData?: object,
}