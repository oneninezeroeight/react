import React from 'react'
import { Upload, message, Button, Icon } from 'antd';
export default class Aupload extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     name: 'file',
        //     action: 'http://localhost:8080/upload',
        //     headers: {
        //         authorization: 'authorization-text',
        //     },
        //     onChange(info) {
        //         console.log(info)
        //         if (info.file.status !== 'uploading') {
        //             console.log(info.file, info.fileList);
        //         }
        //         if (info.file.status === 'done') {
        //             message.success(`${info.file.name} file uploaded successfully`);
        //         } else if (info.file.status === 'error') {
        //             message.error(`${info.file.name} file upload failed.`);
        //         }
        //     },
        // }
    }
    upload(e){
        console.log(e.target.files)
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200&&xhr.readyState===4){
                console.log(xhr.responseText)
            }
        }
        
        xhr.open('POST','http://localhost:8080/upload',true)
        // xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.send(e.target.files[0])
    }
    render() {
        return (
            <div>
            {/* <Upload {...this.state}>
                <Button>
                    <Icon type="upload" /> Click to Upload
                </Button>
            </Upload> */}
                <input multiple onChange={this.upload.bind(this)} type="file" />
            </div>
        )
    }
}

