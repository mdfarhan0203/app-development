import React, { useState } from "react";

const Folder = ({ fileData }) => {
  console.log("da", fileData?.items);
  const [showChild, setShowChild] = useState(false);
  const [subChild,setSubChild] = useState(false)
  const handlerShowFolder = () => {
    setShowChild(!showChild);
  };


  const handlerShowSubFolder = ()=>{

  }

  //root
  if (fileData.isFolder) {
    return (
      <div key={fileData.id}>
        <div onClick={handlerShowFolder}>
          <p>📁 {fileData.name}</p>
        </div>
        {showChild ? (
          <ul style={{ listStyle: "none" }}>
            <div>
              {fileData.items.length > 0 &&
                fileData?.items?.map((item) => {
                  return (
                    <div >
                      <li key={item.id}>
                        {item.isFolder ? "📁" : "📄"}
                        {item.name}
                      </li>
                      {item.isFolder && <Folder fileData={item} />}
                    </div>
                  );
                })}
            </div>
          </ul>
        ) : null}
      </div>
    );
  }
};

export default Folder;
