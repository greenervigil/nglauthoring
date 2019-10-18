import React, { useState } from 'react';
import Header from './header'
import CommitBox from './commitbox';
import Footer from './footer';
import CSVReader from 'react-csv-reader'
import { Alert } from 'react-magma-dom';

let json = {
  audio: {},
  video: {},
  document: {}
}

export default function IntegratedResources({ name }) {

  const [bookAbbr, setBookAbbr] = useState('')

  function handleChange() {
    setBookAbbr(book => book + document.getElementById('bookAbbr').value)
  }
  function handleFileLoad(data) {
    parseToJson(bookAbbr, data);
  }
  function parseToJson(bookAbbr,data) {
    const path = "/media/books/" + bookAbbr + "/Resources/";
    const icon = "img/";
    
    let audio = {
      display: "Audio",
      icon: icon + "audio.jpg",
      zip: path + "Audio/Audio.zip",
      zipInstructor: path+ "Audio/Audio.zip",
      folders : []
    };
    let video = {
      display: "Video",
      icon: icon + "video.jpg",
      zip: path + "video/Video.zip",
      zipInstructor: path + "video/Video.zip",
      folders : []
    };
    let documents = {
      display: "Documents",
      icon: icon + "document.jpg",
      zip: path + "document/Documents.zip",
      zipInstructor: path+ "document/DocumentsInstructor.zip",
      folders : []
    };

    data.forEach(element => {
      const e = {};

      e.name =element[1];
      e.index = parseInt(element[2]);
      e.subfolders = [
        {
          name: element[3] === '' ? element[1] : element[3],
          resources : [
            {
              name:  element[4],
              location: path + element[0] + '/' + element[5],
              teacherOnly: (element[7] === 'TRUE'),
              downloadable: (element[8] === 'TRUE'),
              type: element[0].toLowerCase()
            }
          ]
        }
      ];

      if(element[6] === 'TRUE') {
        e.subfolders[0].resources[0].locationCC = path + element[0] + '/' + element[5].substring(0, element[5].length - 3) + 'vtt';
      }

      if(element[0] === 'Audio') {
        if(!audio.folders.length) {
          audio.folders.push(e); 
        } else {
          let add;
          //check the folder items checking the index if it does not exist set it to be added
          audio.folders.forEach(elem => {
            if(elem.index !== e.index) {
              add = true;
            } else {
              add = false;
            }
          });

          if (add) {
            audio.folders.push(e);
          } else  {
            audio.folders.forEach(el => {
              if (el.index === e.index) {
                let subfolder;
                //if index for the item matches check the subfolder name 
                el.subfolders.forEach(sub => {
                  if(sub.name !== e.subfolders[0].name) {
                    subfolder = true;
                  } else {
                    subfolder = false;
                  }
                });

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0]);
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0]);
                    }
                  });
                }
              }
            })
          }
        }
      }else if(element[0] === 'Video') {
        if(!video.folders.length) {
          video.folders.push(e); 
        } else {
          let add;
          //check the folder items checking the index if it does not exist set it to be added
          video.folders.forEach(elem => {
            if(elem.index !== e.index) {
              add = true;
            } else {
              add = false;
            }
          });

          if (add) {
            video.folders.push(e);
          } else  {
            video.folders.forEach(el => {
              if (el.index === e.index) {
                let subfolder;
                //if index for the item matches check the subfolder name 
                el.subfolders.forEach(sub => {
                  if(sub.name !== e.subfolders[0].name) {
                    subfolder = true;
                  } else {
                    subfolder = false;
                  }
                });

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0]);
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0]);
                    }
                  });
                }
              }
            })
          }
        }
      } else if(element[0] === 'Documents') {
        if(!documents.folders.length) {
          documents.folders.push(e); 
        } else {
          let add;
          //check the folder items checking the index if it does not exist set it to be added
          documents.folders.forEach(elem => {
            if(elem.index !== e.index) {
              add = true;
            } else {
              add = false;
            }
          });

          if (add) {
            documents.folders.push(e);
          } else  {
            documents.folders.forEach(el => {
              if (el.index === e.index) {
                let subfolder = false;
                //if index for the item matches check the subfolder name 
                el.subfolders.forEach(sub => {
                  if(sub.name !== e.subfolders[0].name) {
                    subfolder = true;
                  } /*else {
                    subfolder = false;
                  }*/
                });

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0]);
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0]);
                    }
                  });
                }
              }
            })
          }
        }
      }
    });
    json.audio = audio;
    json.video = video;
    json.document = documents;
    document.getElementById('alert').removeAttribute('hidden');
  }
  return (
    <>
    <Header />
    <div className="main">
      <h2>{name}</h2>
      <div className="container">
        <form>
          <div className="form-group">
          <label htmlFor="bookAbbr">Book Abbreviation</label>
            <input type="text" className="form-control" id="bookAbbr" placeholder="Book Abbreviation" onChange={handleChange}/>
          </div>
          <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={handleFileLoad} />
        </form>
      </div>
      <div className="alert-success" id="alert" role="alert" hidden>
        <Alert dismissable="true" variant="success" onDismiss={() => {document.getElementById('alert').setAttribute('hidden', true)}}><strong>Well done!</strong> JSON creation completed.</Alert>
      </div>
      <CommitBox data={json} bookAbbr={bookAbbr}/>
    </div>
    <Footer />
    </>
  )
}