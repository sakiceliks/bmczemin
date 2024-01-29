import { useState } from "react";
import { Client, Storage, Account, ID, Databases } from "appwrite";
import ListDoc from "./ListDoc";

const BlogCreate = () => {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setid] = useState();
  const [category, setcategory] = useState("");
  const [author, setauthor] = useState('');
  const [content, setcontent] = useState('');
  const [exploreBtnText, setexploreBtnText] = useState('');
  const today = new Date();

  const month = today.getMonth() + 1; // Ay, 0'dan başladığı için 1 ekliyoruz
  const day = today.getDate();
  const year = today.getFullYear();
  const handleUpload = async () => {
    setUploading(true);

    const client = new Client()
      .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
      .setProject("654d24a6efcad9eb4ff2"); // Your project ID

    const storage = new Storage(client);

    const file = document.getElementById("uploader")?.files?.[0];
    const fileId = ID.unique();

    if (!file) {
      console.log("No file selected");
      setUploading(false);
      return;
    }

    try {
      const response = await storage.createFile(
        "654d8330461412b1b65a",
        fileId,
        file
      );

      const url = `https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/${response.$id}/view?project=654d24a6efcad9eb4ff2`;

      client
        .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
        .setProject("654d24a6efcad9eb4ff2"); // Your project ID

      const databases = new Databases(client);

      try {
        const promise = databases.createDocument(
          "654d42331f1604783143",
          "654d42463d470160bb95",
          ID.unique(),
          {
            title: title,
            category:category,
            slug: title.toLowerCase().replace(/\s+/g, '-') + '-' + category.toLowerCase().replace(/\s+/g, '-'), // Generate slug from title
            thumbnail: url,
author:author,
content:content,   
month:month,
day:day,
year:year,       
date:today}
        );

        console.log("Ay:", month);
        console.log("Gün:", day);
        console.log("Yıl:", year);
        promise.then(
          function (response) {
            console.log(response);
            // Do something with the response if needed
          },
          function (error) {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }

    setUploading(false);
  };

  return (
    <div className="">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Başlık"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        placeholder="category"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
        placeholder="author"
      />

      <textarea value={content}         onChange={(e) => setcontent(e.target.value)}
></textarea>

      <div>Upload a file</div>
      <input type="file" id="uploader" className="my-3" />
      <button
        className="bg-white my-5 text-black px-5 py-2 rounded-xl font-semibold"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Yükleniyor..." : "Yükle"}
      </button>
      <ListDoc/>
    </div>
  );
};

export default BlogCreate;
