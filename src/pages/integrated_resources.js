import React, { useState } from 'react'
import CommitBox from '../components/commit/commitbox'
import CSVReader from 'react-csv-reader'
import { Alert, Input} from 'react-magma-dom'

let json = {
  audio: {},
  video: {},
  document: {}
}

export default function IntegratedResources() {

  const [bookAbbr, setBookAbbr] = useState('')

  function handleChange() {
    setBookAbbr(book => book + document.getElementById('bookAbbr').value)
  }
  function handleFileLoad(data) {
    parseToJson(bookAbbr, data)
  }
  function parseToJson(bookAbbr,data) {
    const path = "/media/books/" + bookAbbr + "/Resources/"
    const icon = "img/"
    
    let audio = {
      display: "Audio",
      icon: icon + "audio.jpg",
      zip: path + "Audio/Audio.zip",
      zipInstructor: path+ "Audio/Audio.zip",
      folders : []
    }
    let video = {
      display: "Video",
      icon: icon + "video.jpg",
      zip: path + "video/Video.zip",
      zipInstructor: path + "video/Video.zip",
      folders : []
    }
    let documents = {
      display: "Documents",
      icon: icon + "document.jpg",
      zip: path + "document/Documents.zip",
      zipInstructor: path+ "document/DocumentsInstructor.zip",
      folders : []
    }

    data.forEach(element => {
      const e = buildObject(element, path)

      if(element[0] === 'Audio') {
        if(!audio.folders.length) {
          audio.folders.push(e);
        } else {
          const add = addToFolder(audio.folders, e)
          if (add) {
            audio.folders.push(e)
          } else  {
            audio.folders.forEach(el => {
              if (el.index === e.index) {
                //if index for the item matches check the subfolder name 
                const subfolder = addToSubFolder(el.subfolders, e)

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0])
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0])
                    }
                  })
                }
              }
            })
          }
        }
      }else if(element[0] === 'Video') {
        if(!video.folders.length) {
          video.folders.push(e)
        } else {
          const add = addToFolder(video.folders, e)
          if (add) {
            video.folders.push(e)
          } else  {
            video.folders.forEach(el => {
              if (el.index === e.index) {
                //if index for the item matches check the subfolder name 
                const subfolder = addToSubFolder(el.subfolders, e)

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0]);
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0])
                    }
                  })
                }
              }
            })
          }
        }
      } else if(element[0] === 'Documents') {
        if(!documents.folders.length) {
          documents.folders.push(e); 
        } else {
          const add = addToFolder(documents.folders, e)
          if (add) {
            documents.folders.push(e)
          } else  {
            documents.folders.forEach(el => {
              if (el.index === e.index) {
                //if index for the item matches check the subfolder name 
                const subfolder = addToSubFolder(el.subfolders, e)

                if(subfolder) {
                  el.subfolders.push(e.subfolders[0])
                } else {
                  el.subfolders.forEach(s => {
                    if(s.name === e.subfolders[0].name) {
                      s.resources.push(e.subfolders[0].resources[0])
                    }
                  })
                }
              }
            })
          }
        }
      }
    })
    json.audio = audio
    json.video = video
    json.document = documents
    document.getElementById('alert').removeAttribute('hidden')
  }

  function buildObject(row, path) {
    let object = {}
    object.name =row[1]
      object.index = parseInt(row[2])
      object.subfolders = [
        {
          name: row[3] === '' ? row[1] : row[3],
          resources : [
            {
              name:  row[4],
              location: path + row[0] + '/' + row[5],
              teacheronly: (row[7] === 'TRUE'),
              downloadable: (row[8] === 'TRUE'),
              type: row[0].toLowerCase()
            }
          ]
        }
      ]
      // check for closed captioning.  This will only be true for videos.
      if(row[6] === 'TRUE') {
        object.subfolders[0].resources[0].locationCC = path + getCCFile(row)
      }

      return object
  }

  function getCCFile(object) {
    if(object[5].includes(".web")) {
      return  object[0] + '/' + object[5].substring(0, object[5].length - 4) + 'vtt'
    }else {
      return  object[0] + '/' + object[5].substring(0, object[5].length - 3) + 'vtt'
    }
  }

  function addToFolder(array, object) {
    //check the folder items checking the index if it does not exist set it to be added
    array.forEach(elem => {
      if(elem.index !== object.index) {
        return true;
      } else {
        return false;
      }
    })
  }

  function addToSubFolder(array, object) {
    array.forEach(sub => {
      if(sub.name !== object.subfolders[0].name) {
        return true
      } else {
        return false;
      }
    })
  }
  
  return (
    <>
      <div className="container">
      <h2>Integrated Resources</h2>
        <form className="form-group">
          <Input
            id='bookAbbr'
            labelText='Book Abbreviation'
            placeholder='Book Abbreviation'
            helperMessage='Enter the book Abbreviation for an OWB book or base book for Super Product'
            inputSize='small'
            onChange={handleChange}
          />
          <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={handleFileLoad} />
        </form>
      </div>
      <div className="alert-success" id="alert" role="alert" hidden>
        <Alert dismissable="true" variant="success" onDismiss={() => {document.getElementById('alert').setAttribute('hidden', true)}}>JSON creation complete.</Alert>
      </div>
      <CommitBox data={json} bookAbbr={bookAbbr}/>
    </>
  )
}
