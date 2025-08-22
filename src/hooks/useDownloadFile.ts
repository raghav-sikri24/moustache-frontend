import axios from "axios";

export const downloadPreSigned = async <T>(url: T, fileName: string) => {
  try {
    if (!url || typeof url !== "string") {
      throw new Error("Invalid URL provided");
    }
    if (!fileName || typeof fileName !== "string") {
      throw new Error("Invalid file name provided");
    }

    const res = await axios({
      url: String(url),
      method: "GET",
      responseType: "blob",
    });

    const blobUrl = URL.createObjectURL(res?.data);
    if (!blobUrl) {
      throw new Error("Failed to create a Blob URL");
    }

    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9_\-\.]/g, "_");

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = sanitizedFileName;

    a.click();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error while downloading file:", error);
  }
};

export const downloadFile = (file: File) => {
  if (!file) {
    console.error("No file to download");
    return;
  }

  // Create a URL for the file using URL.createObjectURL
  const fileURL = URL.createObjectURL(file);

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = fileURL;

  // Set the download attribute with the desired file name
  link.download = file.name;

  // Append the link to the body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(fileURL);
};
