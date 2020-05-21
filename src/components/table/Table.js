import React, { Component } from 'react';
import DrawTable from './DrawTable';
import AddCourse from './AddCourse';
import { Button } from 'react-bootstrap';
import htmlToImage from 'html-to-image';
import download from 'downloadjs';


class Table extends Component {
    state = {
        timetable:{}
    }

    add_course_fn = (course) => {
        var flag = 1;
        var i,slot;
        for (i in course.slots){
            slot = course.slots[i];
            if (this.state.timetable[slot]){
                window.alert("Cannot add this course, as it clashes with another.")
                flag = 0;
                break;
            }
        } 
        
        if (flag){
            let timetable = this.state.timetable;
            for (i in course.slots){
                slot = course.slots[i];
                timetable[slot] = course.value ;
                var x = document.getElementById(slot);
                x.innerHTML = course.value;
                // x.href = "/course/"+course.value;
            }
            this.setState({
                timetable
            });
        }
    }

    delete_fn = (key) => {
        const course = document.getElementById(key).innerHTML;
        var i,slot;
        let timetable = this.state.timetable;
        
        for (slot in timetable){
            // slot = timetable[i];
            if (timetable[slot]==course){
                timetable[slot]=null;
                var x = document.getElementById(slot);
                x.innerHTML = null;
            } 
        }
        this.setState({
            timetable
        });
    }

    download_button = () => {
        // var node = document.getElementsByClassName("table_container");
        // htmlToImage.toPng(node)
        //     .then(function (dataUrl) {
        //         var img = new Image();
        //         img.src = dataUrl;
        //         document.body.appendChild(img);
        //     })
        // .catch(function (error) {
        //     console.error('oops, something went wrong!', error);
        // });
        htmlToImage.toPng(document.getElementById('timetable_div'))
            .then(function (dataUrl) {
            download(dataUrl, 'timetable.png');
        });
    }

    render(){
        return(
            <div className="container">
                <hr />
                <AddCourse add_course_fn={this.add_course_fn} />
                <hr />
                <DrawTable delete_fn={this.delete_fn} />
                <hr />
                <Button variant="primary" size="sm" block className="download_button" onClick={this.download_button}>
                    Download
                </Button>
            </div>
        )
    }
}

export default Table;