import { useState } from "react";
import { Client, Storage, Account, ID, Databases } from "appwrite";
import ListDoc from "./ListDoc";

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setid] = useState();
  const [servicesLink, setservicesLink] = useState("");
  const [exploreLink, setexploreLink] = useState("");
  const [exploreBtnText, setexploreBtnText] = useState('');
  const date = new Date();

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
          "65646b7549f9132d58c5",
          ID.unique(),
          {
            title: title,
            servicesLink: servicesLink,
            exploreLink: exploreLink,
            exploreBtnText: exploreBtnText,
            backgroundImage: url,
            id:id
          }
        );

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
        type="number"
        value={id}
        onChange={(e) => setid(e.target.value)}
        placeholder="Sıra"
      />
      <input
        type="text"
        value={servicesLink}
        onChange={(e) => setservicesLink(e.target.value)}
        placeholder="Hizmet Linki"
      />
      <input
        type="title"
        value={exploreLink}
        onChange={(e) => setexploreLink(e.target.value)}
        placeholder="2. Buton Linki"
      />
      <input
        type="text"
        value={exploreBtnText}
        onChange={(e) => setexploreBtnText(e.target.value)}
        placeholder="2. Buton Adı"
      />

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

export default ImageUpload;
