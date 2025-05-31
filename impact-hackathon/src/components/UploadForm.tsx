// import { useState, FormEvent, ChangeEvent } from "react";
// import axios from "axios";

// export default function UploadForm() {
//   const [file, setFile] = useState<File | null>(null);
//   const [description, setDescription] = useState<string>("");
//   const [audioPath, setAudioPath] = useState<string>("");

//   const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post("http://localhost:8000/describe-image", formData);
//       setDescription(response.data.description);
//       setAudioPath(response.data.audio_file_path);
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleUpload}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit" className="mt-2">Upload</button>
//       </form>

//       {description && (
//         <div className="mt-4">
//           <p><strong>Description:</strong> {description}</p>
//           <audio controls src={`http://localhost:8000${audioPath}`} />
//         </div>
//       )}
//     </div>
//   );
// }
