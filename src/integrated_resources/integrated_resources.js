import React from 'react';
import Header from '../header/header'
import CommitBox from '../commit/commitbox';
import Footer from '../footer/footer';
import CSVReader from 'react-csv-reader'

let json = {
  audio: {},
  video: {},
  document: {}
}

/*const JsonReturn = (props) => {
    return (
      <textarea className="form-control" rows="3" value={props.data} readOnly></textarea>
    );
  }*/

const handleForce = (data) => {
  const abbr = document.getElementById('bookAbbr').value;
  parseToJson(abbr, data);
}

const parseToJson = (a,d) => {
  
  const path = "/media/books/" + a + "/Resources/";
  const icon = "img/";
  
  let audio = {
    display: "Audio",
    icon: icon + "audio.jpg",
    zip: path + "audio/Audio.zip",
    zipInstructor: path+ "/Audio.zip",
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

  d.forEach(element => {
    const e = {};

    e.name =element[1];
    e.index = parseInt(element[2]);
    e.subfolders = [
      {
        name: element[3] === '' ? element[1] : element[3],
        resources : [
          {
            name:  element[4],
            location: path + 'Video/' + element[5],
            teacherOnly: (element[7] === 'TRUE'),
            downloadable: (element[8] === 'TRUE'),
            type: 'video'
          }
        ]
      }
    ];

    if(element[6] === 'TRUE') {
      e.subfolders[0].resources[0].locationCC = path + 'Video/' + element[5].substring(0, element[5].length - 3) + 'vtt';
    }

    if(element[0] === 'Audio') {
      if(!audio.folders.length) {
        audio.folders.push(e); 
      } else {
        let add = false;
        audio.folders.forEach(elem => {
          if(elem.index !== e.index) {
            add = true;
          } 
        });
        if (add) {
          audio.folders.push(e);
        } else  {
          audio.folders.forEach(el => {
            if (el.index === e.index) {
              el.subfolders.forEach(sub => {
                if(el.subfolders[0].name === e.subfolders[0].name) {
                  el.subfolders[0].resources.push(e.subfolders[0].resources[0]);
                } else {
                  el.subfolders.push(e.subfolders[0]);
                }
              })
            }
          })
        }
      }
    }else if(element[0] === 'Video') {
      if(!video.folders.length) {
        video.folders.push(e); 
      } else {
        let add = false;
        video.folders.forEach(elem => {
          if(elem.index !== e.index) {
            add = true;
          } 
        });
        if (add) {
          video.folders.push(e);
        } else  {
          video.folders.forEach(el => {
            if (el.index === e.index) {
              el.subfolders.forEach(sub => {
                if(el.subfolders[0].name === e.subfolders[0].name) {
                  el.subfolders[0].resources.push(e.subfolders[0].resources[0]);
                } else {
                  el.subfolders.push(e.subfolders[0]);
                }
              })
            }
          })
        }
      }
    } else if(element[0] === 'Documents') {
      if(!documents.folders.length) {
        documents.folders.push(e); 
      } else {
        let add = false;
        documents.folders.forEach(elem => {
          if(elem.index !== e.index) {
            add = true;
          } 
        });
        if (add) {
          documents.folders.push(e);
        } else  {
          documents.folders.forEach(el => {
            if (el.index === e.index) {
              el.subfolders.forEach(sub => {
                if(el.subfolders[0].name === e.subfolders[0].name) {
                  el.subfolders[0].resources.push(e.subfolders[0].resources[0]);
                } else {
                  el.subfolders.push(e.subfolders[0]);
                }
              })
            }
          })
        }
      }
    }
  });
  json.audio = audio;
  json.video = video;
  json.document = documents;
  console.log(json);
}

const IntegratedResources = (props) => {
    return (
        <>
        <Header />
        <div className="container">
          <h1>{props.name}</h1>
        </div>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Book Abbreviation</label>
              <input type="text" className="form-control" id="bookAbbr" placeholder="Book Abbreviation" />
            </div>
            <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={handleForce} />
          </form>
        </div>
          {/*<div className="container">
            <JsonReturn data={JSON.stringify(json)}/>
          </div>*/}
          <div className="container">
            <CommitBox />
          </div>
          <Footer />
        </>
      );
}

export default IntegratedResources;