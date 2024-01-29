"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from 'react';


function ListDoc() {
    const client = new Client()
    .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
    .setProject("654d24a6efcad9eb4ff2");
    
    const databases = new Databases(client);
    
    let promise = databases.listDocuments(
        "654d42331f1604783143",
        "65646b7549f9132d58c5",
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            client
            .setEndpoint("https://process.env.REACT_APP_ENDPOINT") // Appwrite Endpoint
            .setProject('654d24a6efcad9eb4ff2');
      
            const databases = new Databases(client);
      
            const response = await databases.listDocuments(
                "654d42331f1604783143",
                "65646b7549f9132d58c5",
            );
      
            setDocuments(response.documents);
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        };
      
        fetchData();
      }, []);

  return (
    <>
  <div className="container">
  {documents.map((documents) => (
    <table  key={documents.$id} className="w-full flex flex-row flex-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
   
      <thead className="text-white">
      
      <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th className="p-3 text-left">title</th>
          <th className="p-3 text-left">servicesLink</th>
          <th className="p-3 text-left">exploreLink</th>
          <th className="p-3 text-left">exploreBtnText</th>
          <th className="p-3 text-left"><br></br>background <br></br> <br></br>Image</th>

          <th className="p-3 text-left " width="110px">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="flex-1 sm:flex-none">
      
      <tr  className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">
          documents.title
          </td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
           {documents.servicesLink}
          </td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
           {documents.exploreLink}
          </td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
           {documents.exploreBtnText}
          </td>
          <td className="w-fit h-fit border-grey-light border hover:bg-gray-100 p-3 truncate">
          <img src={documents.backgroundImage}></img>
          </td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            Delete
          </td>
        </tr>
 
      </tbody>
      
    </table>
           ))}
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  html,\n  body {\n    height: 100%;\n  }\n\n  @media (min-width: 640px) {\n    table {\n      display: inline-table !important;\n    }\n\n    thead tr:not(:first-child) {\n      display: none;\n    }\n  }\n\n  td:not(:last-child) {\n    border-bottom: 0;\n  }\n\n  th:not(:last-child) {\n    border-bottom: 2px solid rgba(0, 0, 0, .1);\n  }\n"
    }}
  />
</>

  )
}

export default ListDoc